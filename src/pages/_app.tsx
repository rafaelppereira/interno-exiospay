import { AppProps } from 'next/app';

import { Toaster } from 'react-hot-toast';
import { Header } from '../components/Header';

import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Toaster 
        position="bottom-right"
        reverseOrder={false}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
