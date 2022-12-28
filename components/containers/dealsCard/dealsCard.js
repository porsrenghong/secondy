import { Card, Grid, Row, Text, Col, Button } from "@nextui-org/react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import styles from "../../../styles/popularCategory.module.css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { Scrollbar, FreeMode, Autoplay } from "swiper";
import ReactStars from "react-rating-stars-component";
export default function DealsCard() {
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
  ];

  const firstExample = {
    size: 23,
    value: 2.5,
    edit: false,
  };
  return (
    <>
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
                isPressable
                isHoverable
                variant="flat"
                css={{
                  backgroundColor: "#fff",
                  mw: "300px",
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
                    width="100%"
                    height={300}
                    alt={item.title}
                    css={{ borderRadius: 10 }}
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
                    <ReactStars {...firstExample} />
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
