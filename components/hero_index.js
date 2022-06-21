
import Link from "next/link";
import useModal from "../lib/useModal";
import Modal from "./modal";

export default function HeroIndex() {
    const {isShowing, toggle} = useModal();
    return (
        <section className="flex flex-row min-h-screen60vh max-h-screen60vh bg-0.1.hero bg-cover bg-right bg-no-repeat">

            <div className="flex flex-col justify-center items-center text-center max-w-7xl mx-auto lg:px-0 px-6">

{/*                <div className="font-bebasNeue text-gray.200 text-xl">
                    Featured video
                </div>*/}

                <div className="font-bebasNeue text-white.100 md:text-7xl text-opacity-5 text-6xl xl:w-4/5">
                    Helping Women Navigate Medicine with Clarity
                </div>

                <div className="flex space-x-2">
                    <Link href=''>
                        <button
                            className="hover:bg-rust.800 text-white.100 text-xs uppercase hover:text-gray-50 px-4 py-3 bg-rust.500 rounded-lg"
                            onClick={toggle}>
                            Book A Call
                        </button>
                    </Link>
                    {/*<Link href=''>
                        <button className="hover:bg-rust.800 hover:text-white hover:border-rust.800 text-xs text-gray.100 uppercase px-4 py-3 border border-gray.100 rounded-lg">
                            Watch Video
                        </button>
                    </Link>*/}
                </div>
            </div>

            <section>
                <Modal
                    isShowing={isShowing}
                    hide={toggle}
                />
            </section>
        </section>
    )}
