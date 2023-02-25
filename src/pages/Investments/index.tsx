import { HeaderAction } from "../../components/Header/Header";
import { InvestGold } from "../../components/InvestGold/investGold";
import { LandCard } from "../../components/LandCard/LandCards";
import { Grid, createStyles, Title, Text } from "@mantine/core";
import React from "react";

const data = [
  {
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1560&q=80",
    title: "3 Bedroom Apartment",
    description:
      "Good location, close to the city center, 3 bedrooms, 2 bathrooms, 1 kitchen, 1 living room",
    action: {
      label: "Buy Now",
      link: "#",
    },
    price: "0.5ETH",
  },
  {
    image:
      "https://images.unsplash.com/photo-1584673961397-be26e009333f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1754&q=80",
    title: "Green Field",
    description: "Far away from the city",
    action: {
      label: "Buy Now",
      link: "#",
    },
    price: "0.15ETH",
  },
  {
    image:
      "https://is1-3.housingcdn.com/01c16c28/4d9784a4d975eb2b1112d0e0b85643fd/v0/medium/2_bhk_independent_house-for-sale-benz_circle-Krishna-outside_view.jpg",
    title: "3 Bedroom Apartment",
    description:
      "There’s something special about beautiful houses. It might be their history, the way they feel or just how great it would be to live in them!",
    action: {
      label: "Buy Now",
      link: "#",
    },
    price: "0.25ETH",
  },
  {
    image:
      "https://assets-news.housing.com/news/wp-content/uploads/2022/01/11171226/World’s-15-Most-Beautiful-Houses-That-Will-Leave-You-Awestruck-02.png",
    title: "3 Bedroom Apartment",
    description:
      "Good location, close to the city center, 3 bedrooms, 2 bathrooms, 1 kitchen, 1 living room",
    action: {
      label: "Buy Now",
      link: "#",
    },
    price: "0.7ETH",
  },

  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg0eC--ji2QdHRnu2Y5sk8qLFxdA07muUmbw&usqp=CAU",
    title: "3 Bedroom Apartment",
    description:
      "Good location, close to the city center, 3 bedrooms, 2 bathrooms, 1 kitchen, 1 living room",
    action: {
      label: "Buy Now",
      link: "#",
    },
    price: "0.5ETH",
  },
];

const useStyles = createStyles((theme) => ({
  card: {
    margin: theme.spacing.xl,
  },
  title: {
    textAlign: "center",
    fontWeight: 800,
    fontSize: 40,
    letterSpacing: -1,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    marginBottom: theme.spacing.md,
    marginTop: theme.spacing.xl,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    "@media (max-width: 520px)": {
      fontSize: 28,
      textAlign: "left",
    },
  },
  highlight: {
    color: theme.colors.pink[6],
  },
}));

const Investments = () => {
  const { classes } = useStyles();
  return (
    <>
      <HeaderAction />
      <Title className={classes.title}>
        Invest in Real Estate{" "}
        <Text component="span" className={classes.highlight} inherit>
          With Crypto Currency
        </Text>{" "}
      </Title>

      <Grid className={classes.card} gutter="xl">
        {data.map((data) => (
          <Grid.Col span={4} key={data.title}>
            <LandCard {...data} />
          </Grid.Col>
        ))}
      </Grid>
      <InvestGold />
    </>
  );
};

export default Investments;
