import { Card, Grid, Image, Row, Text } from "@nextui-org/react";

export default function ChooseByBrand() {
  const list = [
    {
      name: "Anker",
      img: "https://pbs.twimg.com/profile_images/1321689547080560640/A0_VI_b-_400x400.jpg",
      price: "$5.50",
    },
    {
      name: "Apple",
      img: "https://e7.pngegg.com/pngimages/180/164/png-clipart-apple-logo-apple-logo.png",
      price: "$3.00",
    },
    {
      name: "Samsung",
      img: "https://images.samsung.com/is/image/samsung/assets/global/about-us/brand/logo/256_144_4.png?$512_N_PNG$",
      price: "$10.00",
    },
    {
      name: "ROG",
      img: "https://m.media-amazon.com/images/I/81YIlZ+OLCL._SY500_.jpg",
      price: "$5.30",
    },
    {
      name: "Tronsmart",
      img: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/m86lqro64x8l9vwbi5g7",
      price: "$15.70",
    },
    {
      name: "XiaoMi",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/1200px-Xiaomi_logo_%282021-%29.svg.png",
      price: "$8.00",
    },
    {
      name: "Oppo",
      img: "https://wallpaperaccess.com/full/4392106.jpg",
      price: "$7.50",
    },
    {
      name: "MSI",
      img: "https://cdn.dribbble.com/users/3144264/screenshots/16080159/media/76c03dd932c1e3f797c3fb5869826de9.png?compress=1&resize=400x300",
      price: "$12.20",
    },
    {
      name: "Oppo",
      img: "https://wallpaperaccess.com/full/4392106.jpg",
      price: "$7.50",
    },
    {
      name: "MSI",
      img: "https://cdn.dribbble.com/users/3144264/screenshots/16080159/media/76c03dd932c1e3f797c3fb5869826de9.png?compress=1&resize=400x300",
      price: "$12.20",
    },
  ];

  return (
    <Grid.Container gap={2} justify="center" css={{ pl: "4%", pr: "4%" }}>
      {list.map((item, index) => (
        <Grid key={index}>
          <Card
            isPressable
            isHoverable
            variant="flat"
            css={{ width: 300, height: 70 }}
          >
            <Card.Body
              css={{
                p: 10,
                display: "flex",
                flexDirection: "row",
                width: 200,
              }}
            >
              <Image
                src={item.img}
                objectFit="cover"
                width={50}
                height={50}
                alt={item.name}
                css={{ borderRadius: "25px 25px 25px 25px" }}
              />
              <Text
                b
                css={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {item.name}
              </Text>
            </Card.Body>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  );
}
