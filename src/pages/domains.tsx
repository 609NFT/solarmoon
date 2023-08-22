import type { NextPage } from "next";
import Head from "next/head";
import { DomainsView } from "../views";

const Domains: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>SolarMoon</title>
        <meta name="description" content="Solana's First Deflationary Token." />
      </Head>
      <DomainsView />
    </div>
  );
};

export default Domains;
