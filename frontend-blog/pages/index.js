import Head from 'next/head'
//import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>kwareict</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <div>
          <div className="HoverContainer">
            <div className="sayedcol">
              list
            </div>
            <div className="sayedcol">
              <div className="fontTest">
                cart
              </div>
              <div className="fontTest">
                cart
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
