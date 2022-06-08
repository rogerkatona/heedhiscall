import Link from "next/link";


export default function HighlightBookACall02() {
    return (
        <section className="flex flex-col p-12">
            <div className="font-bebasNeue text-3xl text-gray.700 pb-4">
                Did you know?
            </div>
            <div className="py-4">
                <span className="text-xl text-gray.700 font-medium">
                    If you are planning an event, the speakers make all the difference.
                </span>
            </div>
            <div className="">
                <div className="text-gray.700 pt-4">
                    You want the audience engaged and feeling that the time they took out of work and their busy lives was worth it.  Dr. Sundar can engage your audience and communicate value with her message.  Her goal is to partner with you, exceed your expectations, so that your attendees have an amazing experience at your event.
                </div>
            </div>
            <div className="pt-8">
                <Link href=''>
                    <button className="hover:bg-rust.800 text-white text-xs uppercase hover:text-gray-50 px-4 py-3 bg-rust.500 rounded-lg">
                        Book A Call
                    </button>
                </Link>

            </div>
        </section>
    )
}






