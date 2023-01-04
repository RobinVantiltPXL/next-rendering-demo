import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>next rendering demo</title>
      </Head>
      <Link href={'/csr'}>CSR - Client Side Rendering</Link><br/><br/>
      <Link href={'/ssr'}>SSR - Server Side Rendering</Link><br/><br/>
      <Link href={'/ssg'}>SSG - Static Site Generation</Link><br/><br/>
    </>
  )
}
