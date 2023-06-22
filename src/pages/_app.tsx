import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import {Poppins} from 'next/font/google'

const poppins = Poppins (
  {
    weight: ['400','500','600','700'],
    style: ['normal'],
    subsets:['latin']
  }
)
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      <Header/>
      <Component {...pageProps} />
      <Footer />
    </main>
  )
   
    
}
