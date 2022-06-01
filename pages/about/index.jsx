import React from "react";
import Layout from "../../components/layout/layout";
import Head from "next/head";

export default function About() {
  console.log("渲染渲染");
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      为什么渲染了两次？
    </>
  );
}

About.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
