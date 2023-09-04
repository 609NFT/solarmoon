import Domains from "components/getMoonDomain";
import { FC, useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import WalletDetail from "components/getWalletInfo";

export const DomainsView: FC = ({}) => {
  const { publicKey } = useWallet();
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
  }
};
