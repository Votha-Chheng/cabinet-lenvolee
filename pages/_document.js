import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
  render () {
    return(
      <Html lang="fr" prefix="og:http://ogp.me/ns#" >
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
          <link href="https://fonts.googleapis.com/css2?family=Tauri&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@300&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Lora&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    )
  }
}
export default MyDocument