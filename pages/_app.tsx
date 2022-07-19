import '../styles/globals.scss'

import Layout from "../components/Layout";
// import youtubeImg from "../public/youtube.png";


import "../styles/globals.scss";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { AuthContextProvider } from "../context/AuthContext";
import { useRouter } from "next/router";
import ProtectedRoute from "../components/ProtectedRoute";


// function MyApp({ Component, pageProps }) {
//   return (
//     <Layout>
//       <main>
//         <Component {...pageProps} />
//       </main>
//     </Layout>
//   );

// }

// export default MyApp




const noAuthRequired = ["/", "/login", "/signup"];

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <AuthContextProvider>
      <Header />
      {noAuthRequired.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      )}
    </AuthContextProvider>
  );
}

export default MyApp;
