import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
  render () {
    return(
      <Html lang="fr" prefix="og:http://ogp.me/ns#" >
        <Head/>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    )
  }
}
export default MyDocument