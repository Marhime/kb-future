import Nav from "../components/Nav";
import "swiper/css";
import "swiper/css/effect-fade";

import "../styles/globals.css";
import MessengerCustomerChat from "react-messenger-customer-chat/lib/MessengerCustomerChat";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#354432" />
      </Head>
      <Nav />
      <Component {...pageProps} />
      <MessengerCustomerChat pageId="101662676052669" appId="797473724785161" />
    </>
  );
}

export default MyApp;
