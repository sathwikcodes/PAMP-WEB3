import React from "react";
import { createStyles, Image } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  hero: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "90vh",
    padding: "0 10%",
  },
  hero_left: {
    width: "50%",
    fontSize: "2.5rem",
    fontFamily:"Inter",
    fontWeight: 500,
    color: "#1f2937",
  },
  hero_right: {
    backgroundColor: "White",
    padding: "2rem",
    borderRadius: "5rem",
  },
}));

export const Hero = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.hero}>
      <div className={classes.hero_left}>
        Invest in physical assets like never before, powered by the security and
        transparency of blockchain technology.
      </div>
      <div className={classes.hero_right}>
        <Image src={"/hero_main_image.svg"} alt="hero" />
      </div>
    </div>
  );
};
