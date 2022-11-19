import '../styles/globals.css'
import '../styles/app.css'
import Head from 'next/head'
import Script from 'next/script'
import {useEffect} from 'react'
// import satyugLogo from "../assets/images/satyugLogo.png";

function MyApp({ Component, pageProps }) {
  // useEffect(()=>{
  //     window.dataLayer = window.dataLayer || [];
  //   function gtag(){dataLayer.push(arguments);}
  //   gtag('js', new Date());
  //   gtag('config', 'G-B64YMWSLWS');
  // },[])
  return (<>
  <Head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"/>
    <title>Satyug</title>
    <link rel='icon' href="/satyugLogo.png" />
  </Head>
  {/* <Script async src="https://www.googletagmanager.com/gtag/js?id=G-B64YMWSLWS" /> */}
   <Script
   id="bootstrap-cdn"
src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" />
  <Component {...pageProps} />
  </>
  )
  
}

export default MyApp
