import Nav from "../components/Nav";
import "swiper/css";
import "swiper/css/effect-fade";

import "../styles/globals.css";
import MessengerCustomerChat from "react-messenger-customer-chat/lib/MessengerCustomerChat";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <MessengerCustomerChat
        pageId="101662676052669"
        appId="797473724785161"
        htmlRef="<REF_STRING>"
      />
    </>
  );
}

export default MyApp;
