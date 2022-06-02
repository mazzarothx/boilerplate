import GlobalStyles from '../styles/global'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Mazzaroth</title>
        <meta name="description" content="Reprogramando as estrelas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  )
}

export default App
