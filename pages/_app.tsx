import '../styles/globals.scss'

import Layout from "../components/Layout";
import youtubeImg from "../public/youtube.png";



function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <main>
        <Component {...pageProps} />
      </main>
    </Layout>
  );

}

export default MyApp
