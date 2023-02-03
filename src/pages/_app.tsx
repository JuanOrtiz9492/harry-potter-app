import "@/styles/globals.css";
import "@/styles/tailwind.css";
import type { AppProps } from "next/app";
import MainLayout from "@/components/mainLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
