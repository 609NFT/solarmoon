import type { NextPage } from "next";
import Head from "next/head";
import { AboutView } from "../views";

const About: NextPage = (props) => {
  return (
    <div className="container">
      <Head>
        <title>SolarMoon</title>
        <meta name="description" content="Solana's First Deflationary Token." />
      </Head>
      <AboutView />
    </div>
  );
};

export default About;
