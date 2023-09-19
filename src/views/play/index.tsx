import { FC, useEffect, useState } from "react";
import { ConnectionProvider } from "@solana/wallet-adapter-react";
import React from "react";
import Iframe from "react-iframe";

export const PlayView: FC = ({}) => {
  return (
    <Iframe
      url="https://smflip-wixg.vercel.app/"
      width="100%"
      height="100%"
      display="block"
      position="relative"
    />
  );
};

/*const { publicKey } = useWallet();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pubKey = publicKey;
  var public_key = JSON.stringify(pubKey);

  if (public_key == null) {
    return <div>{public_key} not logged in</div>;
  } else {
    return (
      <div>
        <WalletDetail />
      </div>
    );
  }*/
