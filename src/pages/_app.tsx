import { usePageLoading } from '@/common/CustomHooks';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Loader from '@/components/Loader/Loader';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import {Poppins} from 'next/font/google'

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
  )
}
