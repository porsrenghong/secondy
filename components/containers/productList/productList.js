import { Button, Card, Col, Grid, Row, Text } from "@nextui-org/react";
import ReactStars from "react-rating-stars-component";

export default function ProductList() {
  const list = [
    {
      title: "Orange",
      img: "/images/fruit-1.jpeg",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "/images/fruit-2.jpeg",
      price: "$3.00",
    },
    {
      title: "Cherry",
      img: "/images/fruit-3.jpeg",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "/images/fruit-4.jpeg",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "/images/fruit-5.jpeg",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "/images/fruit-6.jpeg",
      price: "$8.00",
    },
    {
      title: "Banana",
      img: "/images/fruit-7.jpeg",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: "/images/fruit-8.jpeg",
      price: "$12.20",
    },
    {
      title: "Orange",
      img: "/images/fruit-1.jpeg",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "/images/fruit-2.jpeg",
      price: "$3.00",
    },
    {
      title: "Cherry",
      img: "/images/fruit-3.jpeg",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "/images/fruit-4.jpeg",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "/images/fruit-5.jpeg",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "/images/fruit-6.jpeg",
      price: "$8.00",
    },
    {
      title: "Banana",
      img: "/images/fruit-7.jpeg",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: "/images/fruit-8.jpeg",
      price: "$12.20",
    },
    {
      title: "Lemon 2",
      img: "/images/fruit-6.jpeg",
      price: "$8.00",
    },
    {
      title: "Banana",
      img: "/images/fruit-7.jpeg",
      price: "$7.50",
    },
  ];

  return (
    <Grid.Container gap={1} justify="center">
      {list.map((item, index) => (
        <Grid key={index}>
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
              <Card.Image
                src={"https://nextui.org" + item.img}
                objectFit="cover"
                width={250}
                height={300}
                alt={item.title}
                css={{
                  borderRadius: 10,
                }}
              />
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
                <Text b>{item.title}</Text>
                <Text
                  css={{
                    color: "#000",
                    fontWeight: "$semibold",
                    fontSize: "$sm",
                  }}
                >
                  {item.price}
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
                  description
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
                  Add to Cart
                </Button>
              </div>
            </Card.Footer>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  );
}
