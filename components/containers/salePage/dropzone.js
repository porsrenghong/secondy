import React, { useCallback, useState, useRef, useMemo } from "react";
import { useDropzone } from "react-dropzone";
import { db, storage } from "./../../../firebase";
import {
  addDoc,
  arrayUnion,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes } from "@firebase/storage";
import {
  Button,
  Input,
  Spacer,
  Image,
  Modal,
  Text,
  Row,
  Checkbox,
} from "@nextui-org/react";

const Dropzone = () => {
  const [selectedImages, setselectedImages] = useState([]);
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    setselectedImages([]);
  };
  const captionRef = useRef(null);
  const priceRef = useRef(null);
  const descriptionRef = useRef(null);
  const telRef = useRef(null);
  const scmaRef = useRef(null);
  //***** UPLOAD POST ***** */
  const uploadPost = async () => {
    const docRef = await addDoc(collection(db, "products"), {
      caption: captionRef.current.value,
      price: priceRef.current.value,
      description: descriptionRef.current.value,
      tel: telRef.current.value,
      scma: scmaRef.current.value,
      timestamp: serverTimestamp(),
    });
    const downloadURLs = [];
    await Promise.all(
      selectedImages.map((image) => {
        const imageRef = ref(storage, `products/${docRef.id}/${image.path}`);
        uploadBytes(imageRef, image, "data_url").then(async () => {
          const downloadURL = await getDownloadURL(imageRef);
          console.log(downloadURL);
          downloadURLs.push(downloadURL);
          await updateDoc(doc(db, "products", docRef.id), {
            images: arrayUnion(downloadURL),
          });
        });
      })
    );
    captionRef.current.value = "";
    priceRef.current.value = "";
    descriptionRef.current.value = "";
    setselectedImages([]);
    setVisible(false);
  };

  const onDrop = useCallback((acceptedFiles) => {
    setselectedImages(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  }, []);
  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({ onDrop, accept: "image/*", maxFiles: 1 });
  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );
  //******** Preview Pics******* */
  const selected_images = selectedImages?.map((file) => (
    <Image
      src={file.preview}
      width={200}
      height={200}
      alt="pictures"
      objectFit="fill"
    />
  ));
  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors }) => {
    return (
      <li key={file.path}>
        {file.path} - {file.size} bytes
        <ul>
          {errors.map((e) => (
            <li key={e.code}>{e.message}</li>
          ))}
        </ul>
      </li>
    );
  });
  return (
    <div className="container">
      <Button auto shadow color="gradient" onPress={handler}>
        SELL YOUR PRODUCTS HERE
      </Button>
      <Modal
        closeButton
        blur
        preventClose
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
        width="600px"
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Fill in the product information
          </Text>
        </Modal.Header>
        <Modal.Body css={{ pt: 50 }}>
          <Row>
            <Input
              ref={captionRef}
              clearable
              bordered
              rounded
              animated
              required
              fullWidth
              labelPlaceholder="Enter product's CAPTION"
            />
            <Spacer y={0.5} />
            <Input
              type="number"
              ref={priceRef}
              clearable
              bordered
              rounded
              animated
              required
              fullWidth
              labelPlaceholder="Enter product's PRICE"
            />
          </Row>
          <Spacer y={0.5} />
          <Input
            ref={descriptionRef}
            clearable
            bordered
            rounded
            animated
            required
            fullWidth
            labelPlaceholder="Enter product's DESCRIPTION"
          />
          <Spacer y={0.5} />
          <Text id="modal-title" size={18}>
            Seller information
          </Text>
          <Spacer y={0.5} />
          <Row>
            <Input
              type="number"
              ref={telRef}
              clearable
              bordered
              rounded
              animated
              required
              fullWidth
              labelPlaceholder="Enter your Phone Numer"
            />
            <Spacer y={0.5} />
            <Input
              ref={scmaRef}
              clearable
              bordered
              rounded
              animated
              required
              fullWidth
              labelPlaceholder="Enter Social Media account"
            />
          </Row>
          <Spacer y={0.5} />
          <div {...getRootProps({ style })}>
            <input {...getInputProps()} />
            <p>Drag or drop some files here, or click to select files</p>
            <em>(1 picture only)</em>
          </div>
          <h4>Rejected files</h4>
          <ul>{fileRejectionItems}</ul>
          <h4>Accepted files</h4>
          {selected_images}
        </Modal.Body>
        <Modal.Footer>
          <Button auto type="reset" flat color="error" onPress={closeHandler}>
            Cancel
          </Button>
          <Button auto onPress={uploadPost}>
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Dropzone;

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};
