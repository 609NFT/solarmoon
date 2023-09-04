import { PublicKey } from "@solana/web3.js";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { useWallet } from "@solana/wallet-adapter-react";

function Domains() {
  const { publicKey } = useWallet();
  const pubKey = publicKey;

  return (
    <div>
      <b>on profile page</b>
    </div>
  );
}

export default Domains;
