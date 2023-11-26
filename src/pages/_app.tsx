import { usePageLoading } from '@/common/CustomHooks';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Loader from '@/components/Loader/Loader';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import {Poppins} from 'next/font/google'
import Head from 'next/head';

const poppins = Poppins (
  {
    weight: ['400','500','600','700'],
    style: ['normal'],
    subsets:['latin']
  }
);

const Toaster = dynamic(() => import('react-hot-toast').then((module) => module.Toaster), {
  ssr: false
});

export default function App({ Component, pageProps }: AppProps) {
  const { isPageLoading } = usePageLoading();
  return (
    <>
      <Head>
        <link rel="icon" type="image/ico" href="https://practeasedev.com/favicon.ico" />
        <meta name="application-name" content="Practeasedev" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TAG_ID}`}
        ></script>
        <script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TAG_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        ></script>
      </Head>
      
      <main className={poppins.className}>
        <div className="page">
          <Header/>
          {isPageLoading ? (
            <Loader />
          ) : (
            <Component {...pageProps} />
          )}
          <Toaster />
        </div>
        <Footer />
      </main>
    </>
   
  )
}
