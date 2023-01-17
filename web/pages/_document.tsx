import { Html, Head, Main, NextScript } from "next/document";
import Footer from "@/components/Footer";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Bitstep Web" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
      <Footer />
    </Html>
  );
};

export default Document;
