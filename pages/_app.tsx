import '../styles/globals.css'
import '../styles/app.css'
import type { AppProps } from 'next/app'
import WalletState from '../context/WalletState'
import Script from 'next/script'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
  <WalletState>
    {/* <Head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"/>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"/>
    <title>Satyug</title>
    <link rel='icon' href="/satyugLogo.png" />
  </Head> */}
     {/* <Script
   id="bootstrap-cdn"
src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" /> */}
    <Component {...pageProps} />
    </WalletState>
    </>
  )
}
