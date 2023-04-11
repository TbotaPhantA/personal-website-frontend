import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '@/pages/layout';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

config.autoAddCss = false;


export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-quart",
      mirror: true,
    });
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
