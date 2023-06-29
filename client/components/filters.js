import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCoworkSpacesBySearch, getCoworkSpaces } from '../redux/actions/coworkSpaces';


export default function Filters() {
    const dispatch = useDispatch();
    const [filters, setFilters] = useState({
        score: '',
        location: '',
        services: '',
        price: '',
    });
        
    const handleOnChange = async ({ target: { name, value } }) => {
            if (value === 'reset') {
                setFilters({
                    score: '',
                    location: '',
                    services: '',
                    price: '',

                })
                return dispatch(getCoworkSpaces());
        }

        
        const newFilters = {
            ...filters,
            [name]: value
        };
        
        
        setFilters(newFilters);
        dispatch(getCoworkSpacesBySearch(newFilters));
    }
    
    
    
    return (

<div className="">
<form className="p-2 space-y-32 > * + * mt-12 ">
        <div className=" ">
                <label htmlFor="score" className="p-2 font-bold text-base dark:text-white text-black ">
                  Rating
                 </label>
                <select name="score" onChange={handleOnChange} value={filters.score} className="w-24 px-2 border-2 cursor-pointer rounded-full shadow-lg duration-300 active:outline-none focus:outline-none focus:ring dark:text-white">
                    <option value="reset">Todos</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                 </select>
             </div>
            <div className="flex items-baseline ">
                    <label htmlFor="location" className="p-2 font-bold text-base  dark:text-white text-black ">
                    Ubicacion
                    </label>
                    <select name = "location" onChange={handleOnChange} value={filters.location} className="w-24 px-2 border-2 cursor-pointer rounded-full shadow-lg duration-300 active:outline-none focus:outline-none focus:ring dark:text-white">
                    <option value= "reset">Todos</option>
                    <option value="Buenos Aires">Buenos Aires</option>
                    <option value="Córdoba">Cordoba</option>
                    <option value="Rosario">Rosario</option>
                    <option value="Salta">Salta</option>
                    <option value="Mendoza">Mendoza</option>
                    <option value="Entre Rios">Entre Rios</option>
                    </select>
            </div>
        
            <div className="flex items-baseline ">
                <label htmlFor="services" className="p-2 font-bold text-base  dark:text-white text-black ">
                    Servicios
                </label>
                <select name ="services" onChange={handleOnChange} value={filters.services} className="w-24 px-2 border-2 cursor-pointer rounded-full shadow-lg duration-300 active:outline-none focus:outline-none focus:ring dark:text-white">
                    <option value= "reset">Todos</option>
                    <option value="Cafe">Cafeteria</option>
                    <option value="Pet Friendly">Pet Friendly</option>
                    <option value="Estacionamiento">Estacionamiento</option>
                    <option value="Bike Parking">Bike Parking</option>
                    <option value="Buffet">Buffet</option>
                    <option value="Luz Natural">Natural Light</option>
                    <option value>Quiet Music</option>
                </select>
            </div>
            <div className="flex items-baseline ">
                <label htmlFor="price" className="p-2 font-bold text-base  dark:text-white text-black ">
                    Precios
                </label>
                
                    <select name="price" onChange={handleOnChange} value={filters.price} className="w-28 px-2 border-2 cursor-pointer rounded-full shadow-lg duration-300 active:outline-none focus:outline-none focus:ring dark:text-white">                                              
                    <option value="reset">Todos</option>
                    <option value="10-20">10-20 Usd</option>
                    <option value="20-30">20-30 Usd</option>
                    <option value="30-40">30-40 Usd</option>
                    <option value="40-50">40-50 Usd</option>
                </select>
            </div>
    </form>
</div>

)}