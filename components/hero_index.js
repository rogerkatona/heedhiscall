
import Link from "next/link";

export default function HeroIndex() {

    return (
        <section className="flex flex-row justify-center lg:h-screen90vh h-screen65vh bg-0.1.hero bg-cover ">

            <div className="flex flex-col justify-center items-center text-center ">

                <div className="font-bebasNeue text-gray.200 text-xl">
                    Featured video
                </div>

                <div className="font-bebasNeue text-white.100 text-7xl">
                    Helping Women Navigate Medicine with Clarity
                </div>

                <div className="flex space-x-2">
                    <Link href=''>
                        <button className="hover:bg-rust.800 text-white.100 text-xs uppercase hover:text-gray-50 px-4 py-3 bg-rust.500 rounded-lg">
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


        </section>
    )}
