import { Card, Grid, Row, Text, Col } from "@nextui-org/react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import styles from "../../../styles/popularCategory.module.css";
import "swiper/css/free-mode";
import { FreeMode, Autoplay } from "swiper";
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
      <div className={styles.body}>
        <Swiper
          slidesPerView={5}
          spaceBetween={20}
          freeMode={true}
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
          modules={[FreeMode, Autoplay]}
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
