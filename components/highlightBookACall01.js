import Link from "next/link";


export default function HighlightBookACall01() {
    return (
        <section className="flex flex-col my-12 max-w-7xl mx-auto">
            <div className="font-bebasNeue text-3xl text-gray.700 pb-4">
                Did you know?
            </div>
            <div className="py-4">
                <span className="text-xl text-gray.700 font-medium">
                    By 2025, there will be a shortage of 90,000 physicians.
                </span>
            </div>
            <div className="">
                <div className="text-gray.700">
                    The cost of turnover and decreased productivity from burnout is estimated at $4.6 B annually.
                    Burnout can be a larger problem for female physicians and medical professionals due to &quot;hidden&quot; stressors
                    of gender discrimination in the workplace and family expectations in the home.
                </div>
                <div className="text-gray.700 pt-4">
                    Hospitals and event planners can use their diversity inclusion budget to help their female physicians,
                    mid-level practitioners and nurses reclaim joy in their career which translates to better patient care,
                    less turnover, and a reduction in medical errors.
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






