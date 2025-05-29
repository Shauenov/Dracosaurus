import React from "react";
import Footer from "@theme-original/Footer";

export default function FooterWrapper(props) {
  return (
    <>
      <section>
        <h2>Extra section</h2>
        <p>This is an extra section that appears above the original footer</p>
      </section>
      <Footer {...props} />
    </>
  );
}
