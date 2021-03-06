import '../styles/globals.css'
import Head from 'next/head'
import { useState } from 'react'
import {InView} from 'react-intersection-observer'
import MenuItems from '@/components/menuitems'
import BandeauInfo from '@/components/bandeauinfo'
import Footer from '@/components/footer'
import { BgColorProvider } from 'context/BgColorContext'

function MyApp({ Component, pageProps }) {

  const [bandeauInView, setBandeauInView] = useState(true)

  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8'/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1"/>
        <meta name="description" content="Soins dentaires, esthétique du sourire et green dentistry sur Montpellier et sa région : bienvenue sur le site du cabinet dentaire L'Envolée"/>
        <meta property="og:title" content="Cabinet dentaire L'Envolée du Dr Sylvie Ma-Francin à Castelnau-le-Lez" />
        <meta property="og:image" content="https://zupimages.net/up/22/07/zoag.png"/>
        <meta property="og:image:type" content="image/png"/>
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr" />
        <link rel="stylesheet/css" href='/global.css'/>
        <link rel="icon" href="/images/logo1.svg" />
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" 
          integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
      </Head>


      <div style={{backgroundColor:"var(--main-bgcolor)"}}>
        <BgColorProvider>
            <BandeauInfo/> 
            <InView onChange={(inView, entry)=> setBandeauInView(inView)} />
            <MenuItems bandeauInView={bandeauInView}/>      
            <Component {...pageProps}/>
            <Footer/>
        </BgColorProvider>
    
      </div>  
    </>
  ) 
  
}


export default MyApp
