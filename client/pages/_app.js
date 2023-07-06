import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import axios from "axios";
import { Provider } from "react-redux";
import store from "../redux/store";
import Script from 'next/script';

const {GOOGLE_API_KEY} = process.env;

axios.defaults.baseURL = "https://work-away-back-6zjxm846l-kuenmili.vercel.app/";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store ={store}>
    <Script
      src={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}`}
      strategy="beforeInteractive"
    />
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
