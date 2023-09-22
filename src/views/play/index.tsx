import { FC, useEffect, useState } from "react";
import { ConnectionProvider } from "@solana/wallet-adapter-react";
import React from "react";
import Iframe from "react-iframe";
import Domains from "components/getMoonDomain";

export const PlayView: FC = ({}) => {
  return (
    <div>
      <Domains />
    </div>
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
