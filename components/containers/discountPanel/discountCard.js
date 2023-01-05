import { Card, Col, Text } from "@nextui-org/react";

const DiscountCard = ({ price, description, img }) => {
  return (
    <>
      <Card
        isPressable
        isHoverable
        css={{
          mw: 250,
          height: 400,
          "@xsMax": {
            w: 150,
            h: 250,
          },
        }}
      >
        <Card.Body css={{ pt: 10, pb: 0, m: 0, bg: "#ffffff", h: 200 }}>
          <Col wrap="wrap" justify="space-between" align="flex-start">
            <Text h4 css={{ p: 0, m: 0, "@xsMax": { fontSize: 16 } }}>
              Save
            </Text>
            <Text
              h2
              css={{
                color: "#be3725",
                p: 0,
                m: 0,
                "@xsMax": { fontSize: 20 },
              }}
            >
              {price}
            </Text>
            <Text h6 css={{ p: 0, m: 0, "@xsMax": { fontSize: 12 } }}>
              {description}
            </Text>
          </Col>
        </Card.Body>
        <Card.Footer css={{ p: 0 }}>
          <Card.Image
            src={img}
            objectFit="cover"
            width={250}
            height={300}
            alt="img"
          />
        </Card.Footer>
      </Card>
    </>
  );
};

export default DiscountCard;
