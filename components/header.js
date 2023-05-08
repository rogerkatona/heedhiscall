import NavBar from '../components/navBar'
import Link from "next/link";
import { useState} from 'react'
import navItems from "../data/navItems";
import {useRouter} from "next/router";
import {motion, useScroll, useTransform} from "framer-motion";

export default function Header() {

    const [active, setActive] = useState(false)
    const handleClick = () => setActive(!active)

    const router = useRouter()

    let { scrollY } = useScroll();
    let y = useTransform(scrollY, [0,1], ["0%", "100%"])
    let opacity = useTransform(scrollY, [0,300], [0,1])

    return (
       <>
           <header>
        <motion.div
            className="fixed top-0 left-0 bg-black.100 w-screen z-30"
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{
                duration: 2,
                delay: 2,
            }}
        >
            <div className="lg:flex lg:flex-row lg:justify-between lg:items-center lg:mx-auto lg:max-w-7xl py-3 xl:px-0 lg:px-12 px-6">
                <section>
                    <Link href='/'>
                        <div>
                            <div className="flex flex-row items-center text-gray.100 text-3xl font-bebasNeue">
                                HEED
                                <span className="font-roboto pl-4 text-base text-gray.400">
                                    For those who answer his call
                                </span>

                            </div>
                        </div>
                    </Link>
                </section>
                <div>
                    <section className="absolute right-6 top-6">
                        <button
                            className="lg:hidden text-secondary hover:text-primary focus:appearance-none border-none"
                            onClick={handleClick}>
                            <svg
                                className='w-6 h-6 '
                                fill='none'
                                stroke='#FFFFFF'
                                viewBox='0 0 24 24'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M4 6h16M4 12h16M4 18h16'
                                />
                            </svg>
                        </button>
                    </section>
                    <section className={`${active ? '' : 'hidden'} lg:flex lg:flex-row lg:my-0 my-12`}>
                            <NavBar navItems={navItems}/>
                                <a
                                    href="https://calendly.com/drkalpanasundar"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:bg-blue.400 hover:text-white.100 text-xs text-blue.700 uppercase px-3 py-2 lg:ml-3 lg:mt-0 mt-6 bg-rust.050 rounded-lg">
                                    Donate
                                </a>
                    </section>
                </div>
            </div>
        </motion.div>
           </header>
       </>
    )
}