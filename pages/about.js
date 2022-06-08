import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'


export default function About() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className="max-w-7xl mx-auto xl:px-0 px-12">
                <div className='mt-12'>
                    <header className='mb-12'>
                        <div id="headlineText" className='text-6xl text-gray-700 font-light'>
                            About
                        </div>
                        <div id="subHeadlineText" className='text-base text-gray-500 mt-2'>
                            20 years of experience designing user interfaces for websites and web applications.
                        </div>
                    </header>
                </div>
            </div>
        </Layout>
    )
}