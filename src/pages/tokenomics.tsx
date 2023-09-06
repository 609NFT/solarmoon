import type { NextPage } from "next";
import Head from "next/head";
import { TokenView } from "../views";

const Tokens: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>SolarMoon</title>
        <meta name="description" content="Solana's First Deflationary Token." />
      </Head>
      <TokenView />
    </div>
  );
};

export default Tokens;
