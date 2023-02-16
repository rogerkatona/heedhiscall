import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import HeroIndex from "../components/hero_index"
import BookACall_07 from "../components/bookACall_07";
import {getSortedPostsData} from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import FeaturedMedia from "../components/featured-media";
import Quote from "../components/quote";


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
      <Quote id={0}/>
        <FeaturedMedia  isFeatured="true" isOnHome="true"/>
      <BookACall_07/>
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
                      <div className='md:w-4/5 w-full lg:pl-6 pt-6 lg:pt-0'>
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
                        <div className='text-gray.200 py-4'>{featured.description}</div>
                        <div className='space-x-2'>
                          <Link href="/blog">
                            <button className="hover:bg-rust.800 hover:text-white hover:border-rust.800 text-xs text-gray.200 uppercase px-4 py-3 border border-gray.200 rounded-lg">
                              See all blog posts
                            </button>
                          </Link>
                          <Link href={`/blog/${featured.id}`}>
                            <button className="hover:bg-rust.800 hover:text-white hover:border-rust.800 text-xs text-gray.200 uppercase px-4 py-3 border border-gray.200 rounded-lg">
                              Continue Reading
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </section>
              )}

    </Layout>
  )
}
