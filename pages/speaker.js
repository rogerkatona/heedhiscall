import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Hero from "../components/hero";
import Offerings from "../components/offerings";
import Services from "../components/services";
import BookACall_01 from "../components/bookACall_01";
import Quote from "../components/quote";


export default function Speaker() {

    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <header className="bg-hero_speaker min-h-screen25vh max-h-screen25vh bg-cover bg-left bg-no-repeat flex flex-col justify-center">
                <Hero id={0}/>
            </header>
            <Offerings type="speaker"/>
            <div className="flex flex-row justify-center font-bebasNeue text-5xl text-gray.700 bg-gray.200 py-12">
                Opening Keynotes
            </div>
            <Services type="speaker" subtype="opening_keynote"/>
            <Quote id={1}/>
            <div className="flex flex-row justify-center font-bebasNeue text-5xl text-gray.700 bg-gray.200 py-12">
                Breakout Sessions
            </div>
            <Services type="speaker" subtype="breakout_session"/>
            <Quote id={2}/>
            <div className="flex flex-row justify-center font-bebasNeue text-5xl text-gray.700 bg-gray.200 py-12">
                Closing Keynotes
            </div>
            <Services type="speaker" subtype="closing_keynote"/>
            <BookACall_01/>
        </Layout>
    )
}