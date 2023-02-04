import { Card, Grid, Row, Text, Col, Button } from "@nextui-org/react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import styles from "../../../styles/popularCategory.module.css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { Scrollbar, FreeMode, Autoplay } from "swiper";
import ReactStars from "react-rating-stars-component";
import { useRouter } from "next/router";
export default function DealsCard() {
  const list = [
    {
      title: "Gift for sell",
      img: "/trending/1.jpeg",
      price: "$5.50",
    },
    {
      title: "Varsity jacket",
      img: "/trending/1.jpg",
      price: "$9.00",
    },
    {
      title: "Airpod 1 with case",
      img: "/trending/2.jpg",
      price: "$100.00",
    },
    {
      title: "PS5",
      img: "/trending/3.jpg",
      price: "$555.30",
    },
    {
      title: "Beanies",
      img: "/trending/5.jpg",
      price: "$4.70",
    },
    {
      title: "Football Ball",
      img: "/trending/6.jpg",
      price: "$18.00",
    },
    {
      title: "Moon Lamp",
      img: "/trending/8.jpg",
      price: "$7.50",
    },
    {
      title: "Office Chair",
      img: "/trending/7.jpg",
      price: "$32.20",
    },
  ];

  const firstExample = {
    size: 23,
    value: 2.5,
    edit: false,
  };
  const router = useRouter();
  const handleMovePage = () => {
    router.push("./productDetail");
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
                onPress={handleMovePage}
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
                    src={item.img}
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
                      a day ago
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
