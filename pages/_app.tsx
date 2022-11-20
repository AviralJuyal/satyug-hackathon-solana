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
    <Head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous"/>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"/>
    <title>Satyug</title>
    <link rel='icon' href="/satyugLogo.png" />
  </Head>
     <Script
  //  id="bootstrap-cdn"
src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossOrigin="anonymous" />
    <Component {...pageProps} />
    </WalletState>
    </>
  )
}
