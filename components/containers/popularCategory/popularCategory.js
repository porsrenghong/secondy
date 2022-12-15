import { Card, Grid, Row, Text, Col } from "@nextui-org/react";

export default function PopularCategory() {
  const list = [
    {
      status: "Trending",
      img: "https://nextui.org/images/card-example-2.jpeg",
      category: " Creates beauty like a beast",
    },
    {
      status: "Trending",
      img: "https://nextui.org/images/card-example-2.jpeg",
      category: " Creates beauty like a beast",
    },
    {
      status: "Trending",
      img: "https://nextui.org/images/card-example-2.jpeg",
      category: " Creates beauty like a beast",
    },
    {
      status: "Trending",
      img: "https://nextui.org/images/card-example-2.jpeg",
      category: " Creates beauty like a beast",
    },
    {
      status: "Trending",
      img: "https://nextui.org/images/card-example-2.jpeg",
      category: " Creates beauty like a beast",
    },
    {
      status: "Trending",
      img: "https://nextui.org/images/card-example-2.jpeg",
      category: " Creates beauty like a beast",
    },
  ];

  return (
    <Grid.Container gap={2} justify="center">
      {list.map((item, index) => (
        <Grid xs={6} sm={2} key={index}>
          <Card
            isHoverable
            css={{
              bg: "$black",
              mw: "300px",
              h: "200",
              "@xsMax": { h: "150px" },
            }}
          >
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
              <Col>
                <Text
                  size={12}
                  weight="bold"
                  transform="uppercase"
                  color="#ffffffAA"
                  css={{ "@xsMax": { fontSize: "10px" } }}
                >
                  {item.status}
                </Text>
                <Text h4 color="white" css={{ "@xsMax": { fontSize: "15px" } }}>
                  {item.category}
                </Text>
              </Col>
            </Card.Header>
            <Card.Image
              src={item.img}
              width="100%"
              height={340}
              objectFit="cover"
              alt="Card image background"
            />
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  );
}
