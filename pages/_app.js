import "../styles/globals.css";
import "../styles/normalize.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import "@/utils/dialog";
function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>
  );
}

export default MyApp;
