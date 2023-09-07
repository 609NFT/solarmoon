import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div className="container">
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Pacifico&display=optional"
          rel="stylesheet"
        ></link>
        <title>SolarMoon</title>
        <meta name="description" content="SolarMoon" />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
