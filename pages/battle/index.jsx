import React from "react";
import Layout from "../../components/Layout/layout";
import Head from "next/head";

export default function Battle() {
  console.log("渲染渲染");
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      Battle
    </>
  );
}

Battle.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
