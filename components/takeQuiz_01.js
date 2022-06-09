import Link from "next/link";


export default function TakeQuiz_01() {
    return (
        <section className="flex flex-col py-12 max-w-7xl mx-auto">
            <div className="font-bebasNeue text-3xl text-gray.700 pb-4">
                Where are you on your path to career satisfaction?
            </div>

            <div className="">
                <div className="text-gray.700">
                    This assessment will help you identify which stage you are in.  Remember, you need to know where you are starting so
                    that we can create a map to your final destination!
                </div>
            </div>
            <div className="pt-4">
                <Link href={`/articles`}>
                    <button className="hover:bg-rust.800 hover:text-white.100 text-xs text-rust.700 uppercase px-4 py-3 border border-rust.500 rounded-lg">
                        Take the quiz
                    </button>
                </Link>

            </div>
        </section>
    )
}






