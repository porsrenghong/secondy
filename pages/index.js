import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Card, Grid, Text, Link, Container, Button } from "@nextui-org/react";
import NavigationBar from "../components/containers/navigationbar/navigationBar";
import CarouselBanner from "../components/containers/carouselBanner/CarouselBanner";
import MainSearchBar from "../components/common/searchBar/mainSearchBar/mainSearchBar";
import PopularCategory from "../components/containers/popularCategory/popularCategory";
import { PromotionCard } from "../components/common/cards/promotionCard";
import DealsCard from "../components/containers/dealsCard/dealsCard";
import ChooseByBrand from "../components/containers/chooseByBrand/chooseByBrand";
import DiscountPanel from "../components/containers/discountPanel/discountPanel";
import WeeklyPopularProduct from "../components/containers/weeklyPopularProduct/weeklyPopularProduct";

export default function Home() {
  return (
    <div>
      <div>
        <NavigationBar />
      </div>
      <div
        style={{
          marginBottom: 100,
        }}
      >
        <PromotionCard />
      </div>
      <Text
        h3
        css={{
          paddingLeft: "4%",
          marginTop: 100,
          marginBottom: 25,
          "@xsMax": {
            fontSize: 20,
            marginTop: 50,
            marginBottom: 50,
          },
        }}
      >
        Shop Our Top Categories
      </Text>
      <PopularCategory />
      <Text
        h3
        css={{
          paddingLeft: "4%",
          marginTop: 100,
          marginBottom: 25,
          "@xsMax": {
            fontSize: 20,
            marginTop: 50,
            marginBottom: 50,
          },
        }}
      >
        Todays Best Deals For You!
      </Text>
      <DealsCard />
      <Text
        h3
        css={{
          paddingLeft: "4%",
          marginTop: 100,
          marginBottom: 25,
          "@xsMax": {
            fontSize: 20,
            marginTop: 50,
            marginBottom: 50,
          },
        }}
      >
        Choose By Brand
      </Text>
      <ChooseByBrand />
      <Text
        h3
        css={{
          paddingLeft: "4%",
          marginTop: 100,
          marginBottom: 25,
          "@xsMax": {
            fontSize: 20,
            marginTop: 50,
            marginBottom: 50,
          },
        }}
      >
        Get Up To 70% OFF
      </Text>
      <DiscountPanel />
      <Text
        h3
        css={{
          paddingLeft: "4%",
          marginTop: 100,
          marginBottom: 25,
          "@xsMax": {
            fontSize: 20,
            marginTop: 50,
            marginBottom: 50,
          },
        }}
      >
        Weekly Popular Products
      </Text>
      <WeeklyPopularProduct />
      <Container
        css={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 100,
          marginBottom: 100,
          "@xsMax": {
            marginTop: 50,
            marginBottom: 50,
          },
        }}
      >
        <Button size="lg" color="gradient" auto>
          VIEW ALL PRODUCTS
        </Button>
      </Container>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
