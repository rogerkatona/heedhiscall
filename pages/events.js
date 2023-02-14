import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Hero from "../components/hero";
import GridMedia from "../components/grid-media";
import Quote from "../components/quote";
import EventItem from "../components/eventItem";
import BookACall_07 from "../components/bookACall_07";


export default function Events() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className="bg-hero-events min-h-screen25vh max-h-screen25vh bg-cover bg-left bg-no-repeat flex flex-col justify-center">
                <Hero id={6}/>
            </div>
            <div className='font-bebasNeue text-6xl uppercase text-gray.700 flex flex-row justify-center py-12'>Upcoming Events</div>
            <EventItem  isFeatured="true"/>
            <Quote id={3}/>
            <div className="flex flex-row justify-center font-bebasNeue text-5xl text-gray.700 bg-gray.200 py-12">Past Events</div>
            <EventItem  isFeatured="false"/>
            <BookACall_07/>
        </Layout>
    )
}