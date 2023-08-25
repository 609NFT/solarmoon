import { FC } from "react";
import { SignMessage } from "../../components/SignMessage";
import { SendTransaction } from "../../components/SendTransaction";
import { SendVersionedTransaction } from "../../components/SendVersionedTransaction";
import { TldParser } from "@onsol/tldparser";
import { Connection } from "@solana/web3.js";
import { useEffect } from "react";

export const DomainsView: FC = ({}) => {
  const RPC_URL =
    "https://frosty-sly-general.solana-mainnet.discover.quiknode.pro/f9e0599deb8c35188cc545edbdbd2aabc8a5dc85/";

  // initialize a Solana Connection
  const connection = new Connection(RPC_URL);

  // get the owner pubkey of a domain name
  async function resolveDomain(domain) {
    // initialize a Tld Parser
    const parser = new TldParser(connection);

    return await parser.getOwnerFromDomainTld(domain);
  }

  //get the owner pubkey of "miester.abc";
  const brian = resolveDomain("609.abc");
  console.log(brian);

  return (
    <div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
        <h1 className="text-center text-5xl font-bold bg-clip-text mt-10 mb-8">
          Domains
        </h1>

        <div className="text-center"></div>
      </div>
    </div>
  );
};
