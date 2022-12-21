import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Card, Grid, Text, Link, Container, Button } from "@nextui-org/react";
import NavigationBar from "../components/containers/navigationbar/navigationBar";
import CarouselBanner from "../components/containers/carouselBanner/CarouselBanner";
import MainSearchBar from "../components/common/searchBar/mainSearchBar/mainSearchBar";
import PopularCategory from "../components/containers/popularCategory/popularCategory";
import { PromotionCard } from "../components/common/cards/promotionCard";
import RecommendCard from "../components/containers/recommendCard/recommendCard";

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
        <CarouselBanner />
      </div>
      <Container
        css={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          MarginTop: 100,
          marginBottom: 100,
          "@xsMax": {
            marginTop: 0,
            marginBottom: 0,
          },
        }}
      >
        <MainSearchBar />
      </Container>
      <Text
        h2
        css={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 100,
          marginBottom: 100,
          "@xsMax": {
            fontSize: 20,
            marginTop: 0,
            marginBottom: 50,
          },
        }}
      >
        EXPLORE POPULAR CATEGORY
      </Text>
      <Container>
        <PopularCategory />
      </Container>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 100,
          marginBottom: 100,
        }}
      >
        <PromotionCard />
      </div>
      <Text
        h2
        css={{
          paddingLeft: "5%",
          marginTop: 100,
          marginBottom: 100,
          "@xsMax": {
            fontSize: 20,
            marginTop: 50,
            marginBottom: 50,
          },
        }}
      >
        RECCOMEND FOR YOU
      </Text>
      <Container>
        <RecommendCard />
      </Container>
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
