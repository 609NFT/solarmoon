import { TldParser, NameRecordHeader } from "@onsol/tldparser";
import { Connection, PublicKey } from "@solana/web3.js";

const RPC_URL = "https://api.mainnet-beta.solana.com";

// initialize a Solana Connection
const connection = new Connection(RPC_URL);

// get the all the domains of owned by a user public key
async function getOwnerDomains(owner) {
  // initialize a Tld Parser
  const parser = new TldParser(connection);

  // list of name record header public keys owned by a user
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

    //get the tld
    const tld = await parser.getTldFromParentAccount(nameRecord.parentName);

    //get the domain in string form
    const domain = await parser.reverseLookupNameAccount(
      recordPubkey,
      parentNameRecord?.owner
    );

    domains.push(`${domain}${tld}`);
  }

  return domains;
}

//get the all owner domains
getOwnerDomains(new PublicKey(""));
