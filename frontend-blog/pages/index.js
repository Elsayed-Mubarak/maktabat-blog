import Head from 'next/head'
//import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchAppBar from '../modules/blog/components/searchbox/SearchBox'
export default function Home() {
  return (
    <div>
      <Head>
        <title>kwareict</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <div>
        <SearchAppBar/>
        </div>
      </main>
    </div>
  )
}
