import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import Script from 'next/script';

const {GOOGLE_API_KEY} = process.env;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}`}
        strategy="beforeInteractive"
      />
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;



