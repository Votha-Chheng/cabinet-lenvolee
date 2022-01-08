import Head from 'next/head'
import HomeFirst from '@/components/homefirst'
import HomeSecond from '@/components/homesecond'
import HomeThird from '@/components/homethird'
import ResponsiveHomeFirst from '@/components/responsivehomefirst'
import ResponsiveHomeSecond from '@/components/responsivehomesecond'
import ResponsiveHomeThird from '@/components/responsivehomethird'

export default function Home() {

  return (
    <>
      <Head>
        <title>Cabinet dentaire l&apos;Envolée || Dr Sylvie Ma - Chirurgienne - dentiste || Montpellier - Castelnau-le-Lèz </title>
      </Head>
      <HomeFirst />
      <ResponsiveHomeFirst/>
      <HomeSecond/>
      <ResponsiveHomeSecond/>
      <HomeThird/>
      <ResponsiveHomeThird/>
    </>
      
  )
}

