import ReactPlayer from "react-player";
import Link from "next/link";

export default function HeroIndex({ children, home }) {

    return (
        <section className="flex lg:h-screen90vh h-screen80vh bg-0.1.hero bg-cover flex-row justify-center ">

            <div className="flex flex-col justify-center items-center ">

                <div className="font-bebasNeue text-gray.200 text-xl">
                    Featured video
                </div>

                <div className="font-bebasNeue text-white text-7xl">
                    Helping Women Navigate Medicine with Clarity
                </div>

                <div className="flex space-x-2">
                    <Link href=''>
                        <button className="hover:bg-rust.800 text-white text-xs uppercase hover:text-gray-50 px-4 py-3 bg-rust.500 rounded-lg">
                            Book A Call
                        </button>
                    </Link>
                    <Link href=''>
                        <button className="hover:bg-rust.800 hover:text-white hover:border-rust.800 text-xs text-gray.100 uppercase px-4 py-3 border border-gray.100 rounded-lg">
                            Watch Video
                        </button>
                    </Link>
                </div>
            </div>


        </section>
    )}
