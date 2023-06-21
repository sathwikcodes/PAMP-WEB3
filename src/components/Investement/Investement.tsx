import React from "react";
import { useRouter } from "next/router";

import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },
}));

export const InvestmentSection = () => {
  const { classes } = useStyles();
  const router = useRouter();
  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Invest in land and other physical assets
            </Title>
            <Text color="dimmed" mt="md">
              Our platform allows investors to invest in physical assets like
              land, among other things. The investment process is done through a
              decentralized system that eliminates the need for intermediaries,
              making the investment process more transparent, efficient, and
              cost-effective.
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl" color={"pink"}>
                  <IconCheck size={12} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                Investing in physical assets has historically been considered a
                safe and secure way to grow wealth.
              </List.Item>
              <List.Item>
                Physical assets can include a wide range of items, such as real
                estate, precious metals, and government bonds.
              </List.Item>
              <List.Item>
                Investing in physical assets can provide investors with regular
                income from rental payments or profits from the assets
                appreciation.
              </List.Item>
            </List>

            <Group mt={30}>
              <Button
                radius="xl"
                size="md"
                color={"pink"}
                className={classes.control}
                onClick={() => {
                  router.push("/Investments");
                }}
              >
                Get started
              </Button>
            </Group>
          </div>
          <Image alt="image" src={"/land_image.svg"} className={classes.image} />
        </div>
      </Container>
    </div>
  );
};
