import { PublicKey } from "@solana/web3.js";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { TldParser } from "@onsol/tldparser";
import { Connection } from "@solana/web3.js";

function Domains() {
  const { publicKey } = useWallet();
  const pubKey = publicKey;

  const RPC_URL =
    "https://rpc.helius.xyz/?api-key=22ef82dc-8230-48c5-b093-f2cc9acf690f";

  // initialize a Solana Connection
  const connection = new Connection(RPC_URL);

  // get the owner pubkey of a domain name
  async function resolveDomain(domain) {
    // initialize a Tld Parser
    const parser = new TldParser(connection);

    return await parser.getOwnerFromDomainTld(domain);
  }

  (async () => {
    const value = await resolveDomain("609.abc");
    alert(value);
  })().catch(console.error);

  return (
    <div>
      <b>test</b>
    </div>
  );
}

export default Domains;
