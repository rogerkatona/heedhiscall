import offeringItems from "../data/offeringItems";


export default function Offerings(props) {

    let filteredItem = offeringItems.filter(function (item){
        return item.type === props.type
    });

    return (
        <>
        <section className="py-12 md:pb-0">
            <div className='font-bebasNeue text-6xl uppercase text-gray.700 flex flex-row justify-center pb-6'>What we offer</div>
                <div className="flex lg:flex-row flex-col lg:justify-center lg:space-x-10 mx-12  lg:mb-0 mb-6">
                    {filteredItem.map(filteredItem => (
                        <div key={filteredItem.id} className="">
                            <div className="flex lg:flex-col flex-row lg:text-center md:items-center md:justify-center md:pb-6">
                                <img
                                    className="lg:block hidden flex flex-row"
                                    src={filteredItem.src}
                                    height={150}
                                    width={150}
                                    alt={filteredItem.alt}
                                />
                                <img
                                    className="md:block lg:hidden hidden flex flex-row"
                                    src={filteredItem.src}
                                    height={100}
                                    width={100}
                                    alt={filteredItem.alt}
                                />
                                <div className="flex flex-col md:pl-6 ">
                                    <div className='lg:text-4xl text-2xl font-bebasNeue text-gray.400 font-light pt-4'>{filteredItem.label}</div>
                                    <div className="text text-gray.700 md:w-80  pt-0">{filteredItem.description}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
        </section>
        </>
    )
}






