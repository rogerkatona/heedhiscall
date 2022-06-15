import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Hero from "../components/hero";


export default function InTheMedia() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
                <div className="bg-hero_inTheMedia bg-cover">
                    <Hero id={2}/>
                </div>
        </Layout>
    )
}