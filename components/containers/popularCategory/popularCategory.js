import { Card, Grid, Row, Text, Col } from "@nextui-org/react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import styles from "../../../styles/popularCategory.module.css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { Scrollbar, FreeMode, Autoplay } from "swiper";
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
    {
      status: "Trending",
      img: "https://nextui.org/images/card-example-2.jpeg",
      category: " Creates beauty like a beast",
    },
  ];

  return (
    <>
      {/* <Grid.Container gap={2} justify="center">
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
                  <Text
                    h4
                    color="white"
                    css={{ "@xsMax": { fontSize: "15px" } }}
                  >
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
      </Grid.Container> */}
      <div className={styles.body}>
        <Swiper
          slidesPerView={5}
          spaceBetween={20}
          freeMode={true}
          scrollbar={{
            hide: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            100: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            340: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            650: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            960: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1444: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          modules={[Scrollbar, FreeMode, Autoplay]}
          className={styles.mySwiper}
        >
          {list.map((item, index) => (
            <SwiperSlide key={index}>
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
                    >
                      {item.status}
                    </Text>
                    <Text h4 color="white">
                      {item.category}
                    </Text>
                  </Col>
                </Card.Header>
                <Card.Image
                  src={item.img}
                  objectFit="cover"
                  width="100%"
                  height={340}
                  alt="Card image background"
                />
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
