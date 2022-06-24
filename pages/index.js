import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import HeroIndex from "../components/hero_index"
import MissionStatement from "../components/missionStatement";
import Quote from "../components/quote";
import BookACall_01 from "../components/bookACall_01";
import TakeQuiz_01 from "../components/takeQuiz_01";
import Features from "../components/features";
import {getSortedPostsData} from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";


export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({allPostsData}) {

  let featuredPosts = allPostsData.filter(function (featured){
    return featured.isFeatured === 'true'
  })


  return (
    <Layout className="flex flex-col items-center justify-center ">
      <Head>
        <title>{siteTitle}</title>
      </Head>
        <HeroIndex/>
        <MissionStatement/>
        <Features  featured="true" type="speaker" />
        <Quote id={2}/>
        <Features  featured="true" type="media" />
        <Quote id={1}/>
        <Features  featured="true" type="workshop" />
        <BookACall_01/>
        <Features  featured="true" type="about" />
      <Quote id={0}/>
        {/*<TakeQuiz_01/>*/}
      {
          featuredPosts
              .filter(featured => featured.type === 'blog')
              .map(featured =>
                  <section key={featured.id} className='bg-gray.500 p-12 '>
                    <div  className='flex lg:flex-row lg:flex-row flex-col max-w-7xl mx-auto'>
                      <div className='flex'>
                        <img
                            src={featured.bannerSMImageSource}
                            alt={'Featured Blog'}
                            width={1000}
                        />
                      </div>
                      <div className='w-4/5 lg:pl-6 pt-6 lg:pt-0'>
                        <div className='text-gray.300'>
                          <Link href={`/posts/${featured.id}`}>
                            <a className='hover:underline uppercase text-xs'>/ Blog</a>
                          </Link>
                        </div>
                        <div className='font-bebasNeue text-4xl text-gray.200 pb-4'>
                          Featured Blog
                        </div>
                        <div className='text-xl text-gray.200'>
                          {featured.title}
                        </div>
                        <div className='text-xs pt-1 text-gray.300'>
                          <Date dateString={featured.date} />
                        </div>
                        <div className='text-gray.200 py-4 '>{featured.description}</div>
                        <Link href={`/posts/${featured.id}`}>
                          <button className="hover:bg-rust.800 hover:text-white hover:border-rust.800 text-xs text-gray.200 uppercase px-4 py-3 border border-gray.200 rounded-lg">
                            Continue Reading
                          </button>
                        </Link>
                      </div>
                    </div>
                  </section>
              )}

    </Layout>
  )
}
