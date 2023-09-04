import { PublicKey } from "@solana/web3.js";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import NavElement from "./nav-element";

function WalletDetail() {
  const { publicKey } = useWallet();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pubKey = publicKey;
  var public_key = JSON.stringify(pubKey);

  return (
    <NavElement
      label="Profile"
      href="/domains"
      navigationStarts={() => setIsNavOpen(false)}
    />
  );
}

//const root = ReactDOM.createRoot(document.getElementById("root"));

export default WalletDetail;
