import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from "../components/date";
import {useEffect, useState} from "react";
import Hero from "../components/hero";
import Modal from "../components/modal";
import Quote from "../components/quote";
import GridMedia from "../components/grid-media";
import BookACall_02 from "../components/bookACall_02";


export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default function Blog({allPostsData}) {

    const [active, setActive] = useState(false)

    let featuredPosts = allPostsData.filter(function (featured){
        return featured.isFeatured === 'true' && featured.type === 'blog'
    })

    useEffect(() => {
        function scrollMove(){
            const link = document.querySelector('Link')
            const mOut = document.addEventListener(mouseout, '')
            if ([link.href === '/posts/:id*']){
                setActive(true)
                return () => {
                    link.removeEventListener("mouseout", handleMouseOut)
                }
            }
        }
    },[active])

    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className="min-h-screen">
                <header className="bg-hero_blog bg-cover h-screen40vh">
                    <Hero id={3}/>
                </header>

                <div className='font-bebasNeue text-6xl uppercase text-gray.700 flex flex-row justify-center py-12'>Featured Blog</div>

                <section className="py-6 bg-gray.100">
                    {featuredPosts
                        .map(featured =>
                            <section
                                key={featured.id}
                                className={`flex flex-col p-6 ${featured.featuredID % 2 !== 0  ? 'bg-gray.100' : 'bg-gray.100'}`}>

                                <div className={`flex  flex-col  max-w-7xl mx-auto  ${featured.featuredID % 2 !== 0  ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                                    <div className=''>
                                        <img
                                            src={featured.bannerImageSource}
                                            width={1000}
                                            alt={'Featured Article'}
                                        />
                                    </div>
                                    <div className={`lg:w-4/5 w-full lg:pt-0 pt-6 ${featured.featuredID % 2 !== 0  ? 'lg:pl-6' : 'lg:pr-6'}`}>
                                        <div className='font-bebasNeue text-4xl text-gray.700 pt-4'>
                                            {featured.title}
                                        </div>
                                        <div className={` text-xs pt-1 uppercase ${featured.type === 'about'  ? 'hidden' : 'block'}`}>
                                            <Date dateString={featured.date} />
                                        </div>
                                        <div className='text-gray.700 py-4 '>{featured.description}</div>
                                        <div className="flex flex-row">
                                            <Link href={`/posts/${featured.id}`}>
                                                <button className="hover:bg-rust.800 hover:text-white.100 text-xs text-rust.700 uppercase px-4 py-3 border border-rust.500 rounded-lg">
                                                    Continue Reading
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )}
                </section>
                <section>
                    <Quote id={1}/>
                    <GridMedia type="blog"/>
                    <BookACall_02/>
                </section>

            </div>
        </Layout>
    )
}