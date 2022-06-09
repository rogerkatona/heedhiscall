import heroItems from "../data/heroItems";


export default function Hero(props) {

    let filteredItem = heroItems.filter(function (item){
        return item.id === props.id
    })

    return (
        <>
            <section className="flex flex-row max-w-7xl mx-auto h-screen65vh">
            {filteredItem.map(filteredItem => (
                <section
                    key={filteredItem.id}
                    className="flex flex-col justify-center w-2/3">
                    <div className="bg-gradient-to-r from-white.50 p-12">
                        <div className='font-bebasNeue text-6xl uppercase text-blue.700'>{filteredItem.label}</div>
                        <div className="text-xl text-gray.700">{filteredItem.description}</div>
                    </div>
                </section>
            ))}
        </section>
            </>
    )
}