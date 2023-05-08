import Link from "next/link";
import NavBar from "./navBar";
import navItems from "../data/navItems";



export default function Footer() {


    return (
        <footer className="flex flex-col justify-items-end lg:items-center lg:px-0 px-12 bg-blue.700 text-white py-48 space-y-6">
            <section>
                <Link href='/'>
                    <div>
                        <div className="flex flex-row items-center text-gray.100 text-5xl font-bebasNeue">
                            Heed
                        </div>
                    </div>
                </Link>
            </section>

            <div className='flex md:flex-row flex-col'>
                <NavBar navItems={navItems}/>
            </div>
            <div>
                    <a
                        href="https://calendly.com/drkalpanasundar"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:bg-rust.800 hover:text-white.100 hover:border-rust.800 text-xs text-gray.200 uppercase px-3 py-2  border border-gray.200 rounded-lg">
                        Donate
                    </a>
            </div>
        </footer>
    )
}