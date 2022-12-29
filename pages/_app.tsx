import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NavBar } from "../components/navbar";
import { Footer } from "../components/footer";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <NavBar />
      <div className="flex flex-col h-screen">
        <div className=" grow">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </>
  );
}
