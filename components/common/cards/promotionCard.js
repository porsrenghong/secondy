import { Card, Col, Row, Button, Text } from "@nextui-org/react";

export const PromotionCard = () => (
  <Card shadow css={{ w: "100%", h: "500px", borderRadius: 0 }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          New
        </Text>
        <Text h3 color="white">
          Acme camera
        </Text>
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src="https://assets.website-files.com/5a15e7ca45a0eb000184e841/63868b9aca2dd36af7c53f71_Canon_Banner_Static_1920x756.png"
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
      }}
    >
      <Row>
        <Col>
          <Text color="#fff" size={12}>
            Available now.
          </Text>
          <Text color="#fff" size={12}>
            Check out now.
          </Text>
        </Col>
        <Col>
          <Row justify="flex-end">
            <Button flat auto rounded color="secondary">
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
                Check it out
              </Text>
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);
