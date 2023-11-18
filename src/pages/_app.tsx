import { usePageLoading } from '@/common/CustomHooks';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Loader from '@/components/Loader/Loader';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import {Poppins} from 'next/font/google'
import Head from 'next/head';
import Script from 'next/script';

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
      <Script strategy='lazyOnload' src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TAG_ID}`} />
        <Script strategy='lazyOnload'>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
    
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TAG_ID}')
            `}
      </Script> 
      <Head>
        <link rel="icon" type="image/ico" href="logo(32x32).ico" />
        <meta name="application-name" content="Practeasedev" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
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
