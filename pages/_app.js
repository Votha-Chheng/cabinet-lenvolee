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
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1"/>
        <meta name="description" content="A la recherche d'un massage ou d'un moment propice à la détente sur Arles et la région des Alpilles ?... Baux'T des sens vous propose des séances de massage à domicile et d'initiation au Hata yoga."/>
        <meta property="og:title" content="Baux'T des sens, massage à domicile et yoga Arles Alpilles & Baux de Provence." />
        <meta property="og:image" content="https://zupimages.net/up/21/33/4t0a.jpg"/>
        <meta property="og:image:type" content="image/jpg"/>
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr" />
        <link rel="stylesheet/css" href='/global.css'/>
        <link rel="icon" href="" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Tauri&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@300&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Hind:wght@300&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@100&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Lora&display=swap" rel="stylesheet"/>
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
