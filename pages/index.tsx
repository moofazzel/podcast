import Head from "next/head";

import { Inter } from "next/font/google";
import Layout from "@/components/layout/Layout";
import Banner from "@/components/banner/Banner";
import RecentEpisodes from "@/components/RecentEpisodes";
import AirticleNews from "@/components/AirticleNews";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <Banner />
          <RecentEpisodes />
          <AirticleNews />
        </main>
      </Layout>
    </>
  );
}
