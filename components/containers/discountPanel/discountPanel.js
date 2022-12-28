import DiscountCard from "./discountCard";
import { Card, Grid, Row, Text, Col, Button } from "@nextui-org/react";
const DiscountPanel = () => {
  return (
    <Grid.Container gap={2} justify="center">
      <Grid>
        <DiscountCard
          price="15$"
          description="Enjoy the discount of all type of Books"
          img="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/3510825/original/62965016370261c5134e8d221cf760a66fd4ba4a/design-3d-book-set.jpg"
        />
      </Grid>
      <Grid>
        <DiscountCard
          price="100$"
          description="Explore Furniture with the massive cashback"
          img="https://img.lovepik.com/desgin_photo/45003/2311_list.jpg!/fw/431"
        />
      </Grid>
      <Grid>
        <DiscountCard
          price="19$"
          description="Explore all types of Men Clothing"
          img="https://img.freepik.com/premium-photo/close-up-collection-shade-blue-tone-color-tshirts-hanging-wooden-clothes-hanger-closet_43448-396.jpg"
        />
      </Grid>
      <Grid>
        <DiscountCard
          price="25$"
          description="Explore accessories for your phone"
          img="https://img.freepik.com/premium-photo/up-date-technology-top-view-diverse-personal-accessory_194236-8.jpg?w=2000"
        />
      </Grid>
    </Grid.Container>
  );
};

export default DiscountPanel;
