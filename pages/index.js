import Head from 'next/head'
import HomeFirst from '@/components/homefirst'
import HomeSecond from '@/components/homesecond'
import HomeThird from '@/components/homethird'

export default function Home() {

  return (
    <div>
      <Head>
        <title>Cabinet dentaire l&apos;Envolée || Dr Sylvie Ma - Chirurgienne - dentiste || Montpellier - Castelnau-le-Lèz </title>
      </Head>
      <HomeFirst />
      <HomeSecond/>
      <HomeThird/>
    </div>
  )
}
