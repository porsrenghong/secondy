import { Button, Link, Text } from "@nextui-org/react";
import Image from "next/image";
import { ChevronLeft } from "react-iconly";
import { useRouter } from "next/router";

const CommingSoon = () => {
  const router = useRouter();
  return (
    <>
      \
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Image
          src="/coming-soon.png"
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
          This feature is coming soon
        </Text>
        <Button
          auto
          light
          ripple
          animated
          shadow
          flat
          color
          icon={<ChevronLeft set="bold" primaryColor="black" />}
          onClick={() => router.push("./")}
        >
          Back to Homepage
        </Button>
      </div>
    </>
  );
};

export default CommingSoon;
