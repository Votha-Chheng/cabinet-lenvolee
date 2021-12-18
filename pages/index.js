import Head from 'next/head'
import HomeFirst from '@/components/homefirst'
import HomeSecond from '@/components/homesecond'
import HomeBandeauThird from '@/components/homebandeauthird'

export default function Home() {

  return (
    <div>
      <Head>
        <title>Cabinet dentaire l&apos;Envolée || Dr Sylvie Ma - Chirurgienne - dentiste || Montpellier - Castelnau-le-Lèz </title>
      </Head>
      <HomeFirst />
      <HomeSecond/>
      <HomeBandeauThird/>
    </div>
  )
}
