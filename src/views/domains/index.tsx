import { FC } from "react";
import { TldParser, NameRecordHeader } from "@onsol/tldparser";
import { Connection, PublicKey } from "@solana/web3.js";
import base58 from "bs58";

const RPC_URL = "https://api.mainnet-beta.solana.com";

// initialize a Solana Connection
const connection = new Connection(RPC_URL);

// get the all the domains of owned by a user public key
async function getOwnerDomains(owner, tld) {
  // initialize a Tld Parser
  const parser = new TldParser(connection);

  // list of name record header publickeys owned by user in a tld
  const ownedTldDomains = await parser.getAllUserDomainsFromTld(owner, tld);
  const domainRecordPks = await parser.getAllUserDomains(owner);
  let domains = [];
  for (var recordPubkey of domainRecordPks) {
    //get the name record of a domain pk
    const nameRecord = await NameRecordHeader.fromAccountAddress(
      connection,
      new PublicKey(recordPubkey)
    );

    //get the parent name record of a domain pk
    const parentNameRecord = await NameRecordHeader.fromAccountAddress(
      connection,
      nameRecord.parentName
    );

    //get the domain in string form
    const domain = await parser.reverseLookupNameAccount(
      recordPubkey,
      parentNameRecord?.owner
    );

    domains.push(`${domain}.${tld}`);
  }
  return domains;
}

{
  /*const moonDomain = getOwnerDomains(PublicKey, "moon");*/
}

export const DomainsView: FC = ({}) => {
  return (
    <div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
        <h1 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mt-10 mb-8">
          Domains
        </h1>
        {/* CONTENT GOES HERE */}
        <div className="text-center"></div>
      </div>
    </div>
  );
};
