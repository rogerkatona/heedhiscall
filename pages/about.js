import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Hero from "../components/hero";
import BookACall_01 from "../components/bookACall_01";
import AboutItem from "../components/aboutItem";

export default function About() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className="bg-hero-about min-h-screen50vh max-h-screen50vh bg-cover bg-right bg-no-repeat">
                <Hero id={5}/>
            </div>
            <AboutItem/>
            <div className="bg-gray.050 py-12">
                <BookACall_01/>
            </div>
        </Layout>
    )
}



