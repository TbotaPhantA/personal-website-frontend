'use client';

import Head from 'next/head';

export default function Layout({
  children
}: {
  children: React.ReactNode,
}) {
  return (
    <>
      <Head>
        <title>Timur Dzhabrailov</title>
        <meta name="description" content="Personal website of Timur Dzhabrailov" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
    </>
  )
}
