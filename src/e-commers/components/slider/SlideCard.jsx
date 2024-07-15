import PropTypes from 'prop-types';

export function SlideCard ({category}) {
    return(
        <div className="relative w-[450px] h-[450px] bg-white rounded-xl shadow dark:bg-gray-700 overflow-hidden">
            <img src={category.image} alt={category.name} className="absolute top-0 left-0 w-full h-full object-cover" />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center p-4">
                <div className='flex flex-col items-center justify-around w-full h-full'>
                    <div>
                        <h5 className="text-xs text-white uppercase font-bold">Categoria:</h5>
                        <img src="https://http2.mlstatic.com/kp3-zapatos-deportivo-nike-air-thea-zoom-negro-blanco-damas-D_NQ_NP_942377-MLV25701478703_062017-F.jpg" alt="" height="10px" />
                        <h5 className="text-4xl text-white z-10 font-bold">{category.name}</h5>
                    </div>
                    <button className="bg-white w-[8rem] text-xs font-bold rounded-md px-5 py-3" >Ir a la tienda</button>
                </div>
            </div>
        </div>
    )
}

SlideCard.propTypes = {
    category: PropTypes.object
}