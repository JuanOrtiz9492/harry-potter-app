import Head from "next/head";
import { ReactNode } from "react";
interface propsInterface {
  children: ReactNode;
}
export default function MainLayout(props: propsInterface) {
  return (
    <>
      <Head>
        <title>Harry Potter App</title>
        <meta
          name="description"
          content="an app with data about harry potter world"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{props.children}</main>
    </>
  );
}
