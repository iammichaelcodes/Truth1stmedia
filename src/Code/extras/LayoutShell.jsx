
import React from "react";
import Head from "next/head";
import Header from "./Header";

const LayoutShell = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title || "TruthFirst Media"}</title>
        <meta name="description" content="Exposing corruption through memes, investigations, and decentralized governance." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="bg-truth min-h-screen text-white">{children}</main>
      <footer className="bg-neutral-900 text-gray-400 text-sm text-center py-6 mt-12">
        © {new Date().getFullYear()} TruthFirst Media. Decentralized. Defiant. DAO-powered.
      </footer>
    </>
  );
};

export default LayoutShell;
