// eslint-disable-next-line canonical/filename-match-exported
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

type Props = {};

class Document extends NextDocument<Props> {
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <div id="myportal" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
