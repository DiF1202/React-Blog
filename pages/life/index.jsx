import React from "react";
import Layout from "../../components/Layout/layout";
import Head from "next/head";

export default function Life() {
  console.log("渲染渲染");
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      Life
    </>
  );
}

Life.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
