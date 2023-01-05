import { Card, Col, Row, Button, Text } from "@nextui-org/react";

const ImgBanner = () => {
  return (
    <>
      <Card css={{ w: "100%", h: "400px", borderRadius: 0, mt: 50 }}>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
          <Col>
            <Text
              weight="bold"
              transform="uppercase"
              css={{
                fontSize: 36,
                color: "#000",
                "@xsMax": {
                  fontSize: 20,
                },
              }}
            >
              Get 5% Cash Back On 200$
            </Text>
            <Text
              b
              css={{
                fontSize: 24,
                color: "#000",
                "@xsMax": {
                  fontSize: 16,
                },
              }}
            >
              Discount on all type of Computer Accessories.
            </Text>
          </Col>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            src="https://i.ytimg.com/vi/9fQ0RKR1N5w/maxresdefault.jpg"
            width="100%"
            height="100%"
            objectFit="cover"
            alt="Card example background"
          />
        </Card.Body>
        <Card.Footer
          css={{
            position: "absolute",
            bottom: 0,
            zIndex: 1,
            borderRadius: 0,
            p: 20,
          }}
        >
          <Row justify="flex-end">
            <Button flat auto rounded color="black">
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
                Shop Now
              </Text>
            </Button>
          </Row>
        </Card.Footer>
      </Card>
    </>
  );
};

export default ImgBanner;
