import {
  createStyles,
  Card,
  Overlay,
  CardProps,
  Button,
  Text,
  Badge,
} from "@mantine/core";
import { useRouter } from "next/router";

const useStyles = createStyles((theme) => ({
  card: {
    height: 240,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  content: {
    position: "absolute",
    padding: theme.spacing.xl,
    zIndex: 1,
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },

  action: {
    position: "absolute",
    bottom: theme.spacing.xl,
    right: theme.spacing.xl,
  },

  title: {
    color: theme.white,
    marginBottom: theme.spacing.xs / 2,
  },

  description: {
    color: theme.white,
    maxWidth: 220,
  },
}));

interface ImageActionBannerProps {
  title: React.ReactNode;
  description: React.ReactNode;
  image: string;
  action: {
    label: string;
    link: string;
  };
  price: string;
}

export function LandCard({
  title,
  description,
  image,
  action,
  style,
  className,
  price,
  ...others
}: ImageActionBannerProps &
  Omit<CardProps, keyof ImageActionBannerProps | "children">) {
  const { classes, cx, theme } = useStyles();
  const router = useRouter();

  // open metamask extension and connect to the wallet
  const handleClick = () => {
    router.push("/buy-land");
  };

  return (
    <Card
      radius="md"
      style={{ backgroundImage: `url(${image})`, ...style }}
      className={cx(classes.card, className)}
      {...others}
    >
      <Overlay
        gradient={`linear-gradient(105deg, ${theme.black} 20%, #312f2f 50%, ${theme.colors.gray[4]} 100%)`}
        opacity={0.55}
        zIndex={0}
      />

      <div className={classes.content}>
        <Text size="lg" weight={700} className={classes.title}>
          {title}
        </Text>

        <Text size="sm" className={classes.description}>
          {description}
        </Text>

        <Button
          className={classes.action}
          variant="white"
          color="dark"
          component="a"
          size="xs"
          href={action.link}
          onClick={handleClick}
        >
          {action.label}
        </Button>
        <Badge>
          <Text>Price : {price}</Text>
        </Badge>
      </div>
    </Card>
  );
}
