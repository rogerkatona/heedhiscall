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
        <header className={`${router.pathname.startsWith("/campaign/")  ? 'bg-campaign' : 'bg-primaryLight'}`}>
            <div className="lg:flex lg:flex-row lg:justify-between lg:items-center lg:mx-auto lg:max-w-7xl py-6 xl:px-0 md:px-12 px-6">
                <section>
                    <Link href='/'>
                        <a>
                            <div className="flex flex-row items-center ">
                                <div className="">
                                    <img
                                        src="/image/logo-ks.png"
                                    />
                                </div>
                                <span className="text-2xl font-body uppercase tracking-tight text-white pl-3 hover:text-sand md:block hidden">
                                    Dr. Kalpana Sundar
                                </span>
                            </div>
                        </a>
                    </Link>
                </section>
                <div>
                    <section className="absolute lg:right-10 right-6 top-8">
                        <button
                            className="lg:hidden text-secondary hover:text-primary focus:appearance-none border border-transparent"
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
                    <section className={`${active ? '' : 'hidden'} lg:flex lg:flex-row lg:my-0 my-4`}>
                            <NavBar navItems={navItems}/>
                            <Link href='/contact'>
                                <button className="text-white text-sm uppercase hover:text-sand py-1 px-8 border hover:border-sand lg:mt-0 lg:ml-6 ml-3 ">
                                    Contact
                                </button>
                            </Link>
                    </section>
                </div>
            </div>
        </header>
    )
}