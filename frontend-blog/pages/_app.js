import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
//import { library } from '@fortawesome/fontawesome-svg-core'
//import { fab } from '@fortawesome/free-brands-svg-icons'
//import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Header from "../modules/core/components/header/Header";
import Footer from "../modules/core/components/footer/Footer";
//library.add(fab, faCoffee)
//import '@fortawesome/fontawesome-free/css/all.css';


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>)
}

export default MyApp
