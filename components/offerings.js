import offeringItems from "../data/offeringItems";


export default function Offerings(props) {

    let filteredItem = offeringItems.filter(function (item){
        return item.type === props.type
    });

    return (
        <>
        <section className="py-12">
            <div className='font-bebasNeue text-6xl uppercase text-gray.700 flex flex-row justify-center pb-6'>What we offer</div>
                <div className="flex flex-row justify-center space-x-10">
                    {filteredItem.map(filteredItem => (
                        <div key={filteredItem.id} className="">
                            <div className="flex flex-col text-center items-center">
                                <img
                                    className="lg:block hidden"
                                    src={filteredItem.src}
                                    height={150}
                                    width={150}
                                    alt={filteredItem.alt}
                                />
                                <div className='text-3xl text-gray.700 font-light pt-4'>{filteredItem.label}</div>
                                <div className="text text-gray.700 w-80 pt-2">{filteredItem.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
        </section>
        </>
    )
}






