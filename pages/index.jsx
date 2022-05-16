import React from "react";
import Head from "next/head";
import { Button } from "antd";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
    </div>
  );
};

export default Home;
