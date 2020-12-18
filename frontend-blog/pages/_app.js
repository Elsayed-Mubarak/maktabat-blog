import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../modules/core/components/header/Header";
import Footer from "../modules/core/components/footer/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>)
}

export default MyApp
