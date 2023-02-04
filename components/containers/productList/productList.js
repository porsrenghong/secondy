import { Button, Card, Col, Grid, Row, Text } from "@nextui-org/react";
import ReactStars from "react-rating-stars-component";
import { useRouter } from "next/router";
export default function ProductList() {
  const list = [
    {
      title: "Water Bottle 500ml",
      img: "/recommend_products/bottle.jpg",
      price: "$7.50",
    },
    {
      title: "Chair",
      img: "/recommend_products/chair.jpg",
      price: "$112.20",
    },
    {
      title: "Earrings",
      img: "/recommend_products/earrings.jpg",
      price: "$5.50",
    },
    {
      title: "Foorball Boot nike",
      img: "/recommend_products/footballBoot.jpg",
      price: "$39.00",
    },
    {
      title: "Salt bae glassess",
      img: "/recommend_products/glassess.jpg",
      price: "$10.00",
    },
    {
      title: "Hoodie + Sweatpants Set",
      img: "/recommend_products/hoodieSet.jpg",
      price: "$15.30",
    },
    {
      title: "Sneakers",
      img: "/recommend_products/sneakers.jpg",
      price: "$8.70",
    },
    {
      title: "Addidas Gloves",
      img: "/recommend_products/gloves.jpg",
      price: "$28.00",
    },
    {
      title: "Soccer Cleats",
      img: "/recommend_products/boot.jpg",
      price: "$27.50",
    },
    {
      title: "Yankee Hat Custom LV",
      img: "/recommend_products/yankee.jpg",
      price: "$19.20",
    },
    {
      title: "WindBreaker",
      img: "/recommend_products/windbreaker.jpg",
      price: "$8.00",
    },
    {
      title: "Addidas Sneaker Blue",
      img: "/recommend_products/addidas.jpg",
      price: "$77.50",
    },
  ];
  const router = useRouter();
  const handleMovePage = () => {
    router.push("./productDetail");
  };
  return (
    <Grid.Container gap={1} justify="center">
      {list.map((item, index) => (
        <Grid key={index}>
          <Card
            isPressable
            isHoverable
            onPress={handleMovePage}
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
                src={item.img}
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
                  color="secondary"
                  css={{
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
                  2 days ago
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
        </Grid>
      ))}
    </Grid.Container>
  );
}
