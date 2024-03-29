import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Card, Grid, Text, Container, Button } from "@nextui-org/react";
import NavigationBar from "../components/containers/navigationbar/navigationBar";
import PopularCategory from "../components/containers/popularCategory/popularCategory";
import { PromotionCard } from "../components/common/cards/promotionCard";
import DealsCard from "../components/containers/dealsCard/dealsCard";
import DiscountPanel from "../components/containers/discountPanel/discountPanel";
import ImgBanner from "../components/containers/imgBanner/imgBanner";
import ProductList from "../components/containers/productList/productList";
import Link from "next/link";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import NavAfterLogin from "../components/containers/navigationbar/navAfterLogin";

export default function Home() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // ...
      console.log("success");
      console.log(user.email);
    } else {
      // User is signed out
      // ...
    }
  });
  const user = auth.currentUser;
  return (
    <div>
      <Head>
        <title>Secondy</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>{user ? <NavAfterLogin /> : <NavigationBar />}</div>
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
        Get Up To 70% OFF
      </Text>
      <DiscountPanel />

      <ImgBanner />
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
        We Made Just For You !!
      </Text>
      <ProductList />
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
        <Link href="/products/">
          <Button size="lg" color="gradient" auto>
            VIEW ALL PRODUCTS
          </Button>
        </Link>
      </Container>
      <footer className={styles.footer}>
        <Text>Brought to you by SECONDY</Text>
      </footer>
    </div>
  );
}
