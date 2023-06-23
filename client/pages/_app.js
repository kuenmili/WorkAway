import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import axios from "axios";
import { Provider } from "react-redux";
import store from "../redux/store";

axios.defaults.baseURL = "http://localhost:3001/";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store ={store}>
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
