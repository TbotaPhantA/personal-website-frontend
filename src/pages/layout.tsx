import React from 'react';
import Head from 'next/head';
import { SideBar } from '@/components/SideBar/SideBar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Timur Dzhabrailov</title>
        <meta name="description" content="Personal website of Timur Dzhabrailov" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="app-wrapper">
        <SideBar pageWrapId="page-wrapper" outerContainerId="app-wrapper" />
        <main id="page-wrapper">{children}</main>
      </div>
    </>
  )
}
