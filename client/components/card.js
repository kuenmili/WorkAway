import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateCoworkSpacePrice } from '../redux/actions/coworkSpaces';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/navigation";
import 'swiper/css';
import { Navigation } from "swiper";

const Card = ({ coworkSpace }) => {
    const dispatch = useDispatch();
    const [activeModify, setActiveModify] = useState(false);
    const [price, setPrice] = useState('');

    const handleModifyPrice = () => {
        setActiveModify(true);
    }

    const handleChangePrice = ({ target: { value } }) => {
        value > 0 && setPrice(value);
    }

    const handleSavePrice = (id) => {
        setActiveModify(false);
        dispatch(updateCoworkSpacePrice(id, price));
    }

    return (
        <div className ="shadow-lg rounded-lg hover:scale-110 transition duration-300" key={coworkSpace._id}>      
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                coworkSpace.images?.map((image, index) => (
                    <SwiperSlide key={index}>
                    <img
                        className = "rounded-t-2xl h-80 object-cover ml-4"  
                        width={450} 
                        height={400} 
                        loading='eager'
                        src={image} 
                        alt=""
                        key={index}
                    /> 
               </SwiperSlide>
              ))
            } 
            </Swiper>  
            <div className='p-5'>
                <h3 className='text-3xl font-bold text-slate-700 mb-3 dark:text-white'>{coworkSpace.name}</h3>
                <p className='text-lg font-bold text-gray-700 dark:text-white mb-1'>{coworkSpace.location}</p>
                <p className='text-lg font-normal text-gray-600 dark:text-white line-clamp-5'>{coworkSpace.services} </p>
                <p className='text-lg font-normal text-gray-600 dark:text-white line-clamp-5'>{coworkSpace.address} </p>
                {
                    activeModify ? (
                        <div>
                            <input onChange={handleChangePrice} value={price} type="number" placeholder="Enter new price" />
                            <button onClick={() => handleSavePrice(coworkSpace._id)}>Save</button>
                            <button onClick={() => setActiveModify(false)}>Cancel</button>
                        </div>
                    ) : (
                        <div>
                        <p className='text-lg font-normal text-gray-600 dark:text-white line-clamp-5'> ${coworkSpace.price}Usd </p>
                        <button onClick={handleModifyPrice} >Modify</button>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Card;