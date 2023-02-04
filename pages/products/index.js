import React, { useEffect, useState } from "react";
import NavigationBar from "../../components/containers/navigationbar/navigationBar";
import ProductList from "../../components/containers/productList/productList";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";
import { auth } from "../../firebase";
import moment from "moment";
import {
  Button,
  Card,
  Col,
  Grid,
  Row,
  Text,
  Image,
  Link,
} from "@nextui-org/react";
import NavAfterLogin from "../../components/containers/navigationbar/navAfterLogin";
const AllProducts = ({ href }) => {
  const [posts, setPosts] = useState([]);
  const postImages = (post) => {
    const post_images = post.images?.map((file) => (
      <Image
        src={file}
        style={{ objectFit: "cover" }}
        width={250}
        height={300}
        css={{ borderRadius: 10 }}
      />
    ));
    return post_images;
  };
  useEffect(() => {
    const collectionRef = collection(db, "products");
    const q = query(collectionRef, orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setPosts(
        querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          timestamp: doc.data().timestamp?.toDate().getTime(),
        }))
      );
    });

    return unsubscribe;
  }, []);
  const user = auth.currentUser;
  return (
    <>
      <div>{user ? <NavAfterLogin /> : <NavigationBar />}</div>
      <Grid.Container gap={2} justify="center">
        {posts.map((post) => (
          <Grid key={post.id}>
            <Link href={`/products/${post.id}`}>
              <Card
                isPressable
                isHoverable
                variant="flat"
                css={{
                  backgroundColor: "#fff",
                  mw: "300px",
                  "@xsMax": {
                    w: 170,
                    h: 350,
                  },
                }}
              >
                <Card.Body
                  css={{
                    "@xsMax": {
                      w: "100%",
                      height: 200,
                    },
                  }}
                >
                  {postImages(post)}
                </Card.Body>
                <Card.Footer css={{ display: "flex", flexDirection: "column" }}>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text b>{post.caption}</Text>
                    <Text
                      css={{
                        color: "$secondary",
                        fontWeight: "$semibold",
                        fontSize: "$sm",
                      }}
                    >
                      {post.price} $
                    </Text>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Text
                      css={{
                        color: "#000",
                        fontWeight: "$semibold",
                        fontSize: "$sm",
                      }}
                    >
                      {moment(post.timestamp).fromNow()}
                    </Text>
                    <Button
                      rounded
                      flat
                      auto
                      color="secondary"
                      css={{
                        mt: 10,
                        width: "20px",
                      }}
                    >
                      Add to Favorite
                    </Button>
                  </div>
                </Card.Footer>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid.Container>
    </>
  );
};

export default AllProducts;
