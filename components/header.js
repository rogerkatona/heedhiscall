import NavBar from '../components/navBar'
import Link from "next/link";
import { useState} from 'react'
import navItems from "../data/navItems";
import {useRouter} from "next/router";


export default function Header() {

    const [active, setActive] = useState(false)
    const handleClick = () => setActive(!active)

    const router = useRouter()


    return (
       <>
        <header className={`${router.pathname.startsWith("/campaign/")  ? 'bg-campaign' : 'bg-blue.700'}`}>
            <div className="lg:flex lg:flex-row lg:justify-between lg:items-center lg:mx-auto lg:max-w-7xl py-6 xl:px-0 lg:px-12 px-6">
                <section>
                    <Link href='/'>
                        <a>
                            <div className="flex flex-row items-center">
                                <img
                                    src="/image/logo.svg"
                                    width={250}
                                    alt={'Logo'}
                                />
                            </div>
                        </a>
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
                                    Book a call
                                </a>
                    </section>
                </div>
            </div>
        </header>

       </>
    )
}