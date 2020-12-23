import Head from 'next/head'
//import styles from '../styles/Home.module.css'
import SearchAppBar from '../modules/blog/components/searchbox/SearchBox'
import DropdownFilter from '../modules/blog/components/dropdownfilter/DropdownFilter'
import Card from '../modules/blog/components/card/Cards'


export default function Home({ blogs, URL }) {
  return (
    <div>
      <Head>
        <title>kwareict</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <div>
          <SearchAppBar />
          <DropdownFilter />
          <Card blogs={blogs} URL={URL} />
        </div>
      </main>
    </div>
  )
}


export async function getServerSideProps() {
  const { API_URL } = process.env;
  const res = await fetch(`${API_URL}/articles`)
  const data = await res.json()

  return {
    props: {
      blogs: data,
      URL: API_URL
    }
  }
}