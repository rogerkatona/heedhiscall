import Link from "next/link";


export default function MissionStatement() {
    return (
        <section className="max-w-7xl mx-auto mx-12">
            <div className="flex flex-col justify-center xl:px-0 px-12 py-12">
                <div className="font-bebasNeue md:text-4xl text-3xl text-gray.700">
                    Transformational speaker . Master Certified Professional Coach
                </div>
                <div className="pt-4">
                    Dr. Kalpana Sundar is a transformational speaker and master certified life coach,  who focuses on guiding professional women toward fulfilling careers and personal lives. She helps women navigate careers, leadership and entrepreneurship with clarity to work towards their version of success. Dr Sundar’s keynotes, workshops and breakout sessions inspire women to regain career fulfillment.
                </div>
                <div className="flex row filter transition duration-500 ease-in-out hover:brightness-75 pt-4">
                    <Link
                        href="https://www.linkedin.com/in/drkalpanasundar">
                        <a>
                            <img
                                className="mr-2"
                                src="/image/icon-linkedin.svg"
                                height={28}
                                width={28}
                                alt="LinkedIn"
                            />
                        </a>
                    </Link>
                    <Link
                        href="https://www.instagram.com/kalpana.unbound/">
                        <a>
                            <img
                                className="mr-2"
                                src="/image/icon-instagram.svg"
                                height={28}
                                width={28}
                                alt="Instagram"
                            />
                        </a>
                    </Link>
                    <Link
                        href="https://www.youtube.com/channel/UCa1ChYX6QpDaxkhE-sngD5w">
                        <a>
                            <img
                                src="/image/icon-youtube.svg"
                                height={28}
                                width={28}
                                alt="YouTube"
                            />
                        </a>
                    </Link>
                </div>
            </div>
        </section>
    )
}






