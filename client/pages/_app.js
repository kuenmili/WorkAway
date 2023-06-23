import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import { Provider } from 'react-redux';
import {store} from "../store/index";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
    <ThemeProvider  attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
