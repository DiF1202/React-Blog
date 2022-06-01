import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/layout";
import Head from "next/head";
import { useDispatch } from "react-redux";
import { changMainMoveRight } from "../../components/Layout/store/actionCreators";

export default function About() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changMainMoveRight(true));
  }, [dispatch]);
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      about
    </>
  );
}

About.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
