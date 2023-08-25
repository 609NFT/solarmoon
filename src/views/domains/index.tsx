import { FC } from "react";
import { SignMessage } from "../../components/SignMessage";
import { SendTransaction } from "../../components/SendTransaction";
import { SendVersionedTransaction } from "../../components/SendVersionedTransaction";
import { TldParser } from "@onsol/tldparser";
import { Connection } from "@solana/web3.js";

export const DomainsView: FC = ({}) => {
  const RPC_URL = "https://api.mainnet-beta.solana.com";

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
  alert(brian);

  return (
    <div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
        <h1 className="text-center text-5xl font-bold bg-clip-text mt-10 mb-8">
          Domains
        </h1>

        {/* CONTENT GOES HERE */}
        <div className="text-center"></div>
      </div>
    </div>
  );
};
