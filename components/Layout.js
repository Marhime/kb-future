import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";

const Layout = ({ children, white }) => {
  return (
    <>
      <Nav white={white ? white : null} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
