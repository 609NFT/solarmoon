import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div className="container">
      <Head>
        <title>SolarMoon</title>
        <meta name="description" content="SolarMoon" />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
