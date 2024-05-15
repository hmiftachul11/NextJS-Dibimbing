import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/images/favicon.svg" /> {/* Replace with your favicon path */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
