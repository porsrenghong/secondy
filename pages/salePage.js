import { Text } from "@nextui-org/react";
import Image from "next/image";
import NavSalePage from "../components/containers/navigationbar/navSalePage";
import Dropzone from "./../components/containers/salePage/dropzone";
const SalePage = () => {
  return (
    <>
      <NavSalePage />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Image
          src="/trade.png"
          width="300"
          height="300"
          style={{ marginTop: 150, marginBottom: 30 }}
        />
        <Text
          h2
          weight="bold"
          css={{
            "@xsMax": {
              fontSize: "20px",
            },
          }}
        >
          You are not selling anything
        </Text>
        <Text
          h4
          css={{
            "@xsMax": {
              fontSize: "15px",
            },
          }}
        >
          click button above to start selling any products you want
        </Text>
      </div>
    </>
  );
};

export default SalePage;
