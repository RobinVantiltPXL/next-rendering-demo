import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>next rendering demo</title>
      </Head>
      <Link href={'/main'}>Main</Link><br/><br/>
    </>
  )
}