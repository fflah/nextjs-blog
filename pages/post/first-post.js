import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost() {
    return(
        <Layout>
            <Head>
                <title>This is forst page write by me</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Fist post</h1>
            <Image
                src="/images/profile.jpg"
                height={144}
                width={144}
                alt="zulfa"
            />
            <h2>
                <Link href="/">
                    <a> Back to home</a>
                </Link>
            </h2>
        </Layout>
    )
  }