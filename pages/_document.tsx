import React from "react";
import NextDocument, { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

type Props = {};

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html>
        <Head>
          <Script src="https://widget.cloudinary.com/v2.0/global/all.js" />
        </Head>
        <body>
          <Main />
          <div id="modal-root" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
