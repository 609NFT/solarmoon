import type { NextPage } from "next";
import Head from "next/head";
import { StatsView } from "../views";

const Stats: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>SolarMoon</title>
        <meta name="description" content="Solana's First Deflationary Token." />
      </Head>
      <StatsView />
    </div>
  );
};

export default Stats;
