import type { NextPage } from "next";
import Head from "next/head";
import { StatsView } from "../views";
import { Container } from "@mui/material";

const Stats: NextPage = (props) => {
  return (
    <div className="container">
      <Head>
        <title>SolarMoon</title>
        <meta name="description" content="Solana's First Deflationary Token." />
      </Head>
      <StatsView />
    </div>
  );
};

export default Stats;
