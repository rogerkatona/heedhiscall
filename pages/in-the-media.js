import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Hero from "../components/hero";


export default function Services() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <header className="bg-hero_inTheMedia bg-cover h-screen50vh">
                <Hero id={2}/>
            </header>
        </Layout>
    )
}