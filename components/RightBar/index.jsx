import React, { memo, useState, useEffect } from "react";
import Author from "./Author/Author";
import Position from "./position/index";
import { useRouter } from "next/router";

import Skills from "./Skills";
import Tags from "./Tags";
function RenderCmpByRoutes(route, homeFontColor, hotArticles, history) {
  switch (route) {
    case "/about":
      return <Skills />;
    case "/home":
      return <Tags />;
    default:
      return null;
  }
}

const RightBar = () => {
  const [RouterPath, setRouterPath] = useState("");
  const router = useRouter();

  useEffect(() => {
    setRouterPath(router.pathname);
  }, [router.pathname]);
  return (
    <div>
      <Author></Author>
      <Position></Position>
      {RenderCmpByRoutes(RouterPath)}
    </div>
  );
};

export default memo(RightBar);
