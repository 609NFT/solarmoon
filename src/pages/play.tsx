import type { NextPage } from "next";
import Head from "next/head";
import { PlayView } from "../views";

const Play: NextPage = (props) => {
  return (
    <div className="play_container">
      <Head>
        <title>SolarMoon</title>
        <meta name="description" content="Solana's First Deflationary Token." />
      </Head>
      <PlayView />
    </div>
  );
};

export default Play;
