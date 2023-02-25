import {
  createStyles,
  Text,
  Title,
  Button,
  Image,
  Group,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing.xl * 2,
    borderRadius: theme.radius.md,
    margin: theme.spacing.xl * 2,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[3]
    }`,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      flexDirection: "column-reverse",
      padding: theme.spacing.xl,
    },
  },

  image: {
    maxWidth: "40%",
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%",
    },
  },

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
}));

export function BuyLand() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <Title className={classes.title}>Happy Lands</Title>
        <Text color="dimmed" mt="md">
          Happy Lands is a platform that allows you to buy land in the United
          States. We are a team of real estate professionals who have been
          working in the industry for over 10 years. We have a proven track
          record of success and we are excited to share our knowledge with you.
        </Text>
        <Group mt={30}>
          <Button
            radius="xl"
            size="md"
            color={"pink"}
            className={classes.control}
          >
            Buy With Ethereum
          </Button>
        </Group>
      </div>
      <Image
        src={
          "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        }
        className={classes.image}
      />
    </div>
  );
}
