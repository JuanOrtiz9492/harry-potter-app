import Head from "next/head";
import Navbar from "./navbar";
import { ReactNode } from "react";

interface propsInterface {
  children: ReactNode;
}
export default function MainLayout(props: propsInterface) {
  return (
    <>
      <Head>
        <title>Potterverse Hub</title>
        <meta
          name="description"
          content="an app with data about harry potter world"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex min-h-screen flex-col bg-gradient-to-b from-teal-900 to-gray-800">
          <Navbar />
          {props.children}
        </div>
      </main>
    </>
  );
}
