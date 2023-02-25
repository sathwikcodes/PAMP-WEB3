import React, { useState } from "react";
import { createStyles, Button, Text, Title, ActionIcon } from "@mantine/core";
import { useRouter } from "next/router";
import Web3 from "web3";
import { IconPlus } from "@tabler/icons-react";

declare global {
  interface Window {
    ethereum?: any;
    web3?: any;
  }
}

const useStyles = createStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
    height: "60px",
  },
  logo: {
    width: "33.33%",
  },
  logo_image: {
    width: "100%",
    borderRadius: "10px",
    overflow: "hidden",
  },
  navLinks: {
    display: "flex",
    justifyContent: "space-between",
    width: "33.33%",
  },
  navLink: {
    cursor: "pointer",
    color: "#1f2937",
    fontFamily:"Inter",

    "&:hover": {
      color: "#db2777",
    },
  },

  contact_us: {
    width: "33.33%",
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
  },
}));

export const HeaderAction = () => {
  const { classes } = useStyles();
  const router = useRouter();

  const [isConnected, setIsConnected] = useState(false);
  const [ethBalance, setEthBalance] = useState("");

  const detectCurrentProvider = () => {
    let provider;
    if (window.ethereum) {
      provider = window.ethereum;
    } else if (window.web3) {
      provider = window.web3.currentProvider;
    } else {
      console.log("Non-ethereum browser detected. You should install Metamask");
    }
    return provider;
  };

  const onConnect = async () => {
    try {
      const currentProvider = detectCurrentProvider();
      if (currentProvider) {
        await currentProvider.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(currentProvider);
        const userAccount = await web3.eth.getAccounts();
        const account = userAccount[0];
        let ethBalance = await web3.eth.getBalance(account);
        setEthBalance(ethBalance);
        setIsConnected(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onDisconnect = () => {
    setIsConnected(false);
  };

  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <Title
          style={{
            color: "#db2777",
            cursor: "pointer",
          }}
          order={3}
          onClick={() => {
            router.push("/");
          }}
        >
          PAMP
        </Title>
      </div>
      <div className={classes.navLinks}>
        <div
          className={classes.navLink}
          onClick={() => {
            router.push("/Investments");
          }}
        >
          Investments
        </div>
        <div
          className={classes.navLink}
          onClick={() => {
            router.push("/how-it-works");
          }}
        >
          How It Works
        </div>
        <div className={classes.navLink}>Organization</div>
        <div className={classes.navLink}>Funding</div>
      </div>
      <div className={classes.contact_us}>
        <Button
          color="pink"
          variant="filled"
          size={"sm"}
          onClick={() => {
            router.push("/minter");
          }}
          leftIcon={<IconPlus size={18} />}
        >
          Minter
        </Button>
        <Button
          color="blue"
          variant="outline"
          onClick={() => {
            router.push("https://qr-address-do1s.vercel.app/");
          }}
        >
          Scan QRCode
        </Button>
        {!isConnected && (
          <Button color="pink" onClick={onConnect}>
            Login Using MetaMask
          </Button>
        )}
        {isConnected && (
          <Button color={"red"} variant={"outline"} onClick={onDisconnect}>
            Disconnect
          </Button>
        )}
      </div>
    </div>
  );
};
