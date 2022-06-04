import "../styles/globals.css";
import "../styles/normalize.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import "@/utils/dialog";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);
  if (!showChild) return null;

  const getLayout = Component.getLayout || ((page) => page);
  return (
    <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
  );
}

export default MyApp;
