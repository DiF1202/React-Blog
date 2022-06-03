import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/layout";
import Head from "next/head";
import { useDispatch } from "react-redux";
import { changMainMoveRight } from "../../components/Layout/store/actionCreators";

export default function Iteract() {
  // console.log("渲染渲染");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changMainMoveRight(true));
  }, [dispatch]);
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      Iteract
    </>
  );
}

Iteract.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
