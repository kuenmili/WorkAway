
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCoworkSpacesBySearch } from '../redux/actions/coworkSpaces';


export default function Filters() {
    const dispatch = useDispatch();
    const [filters, setFilters] = useState({
        score: '',
        location: '',
        capacity: '',
        services: '',
        price: '',
    });

    const handleOnChange = async ({ target: { name, value } }) => {
        const newFilters = {
            ...filters,
            [name]: value
        };
        setFilters(newFilters);
        dispatch(getCoworkSpacesBySearch(newFilters));
    }

    return (

<div className="">
<form className="p-2 space-y-32 > * + * mt-8 ">
        <div className=" ">
                <label htmlFor="score" className="p-2 font-bold text-base  dark:text-white text-black ">
                  Rating
                 </label>
                <select name="rating" onChange={handleOnChange} value={filters.score} className="w-24 px-2 border-2 cursor-pointer rounded-full shadow-lg duration-300 active:outline-none focus:outline-none focus:ring dark:text-white">
                    <option value="reset"></option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                 </select>
             </div>
            <div className="flex items-baseline ">
                    <label htmlFor="score" className="p-2 font-bold text-base  dark:text-white text-black ">
                    Ubicacion
                    </label>
                    <select onChange={handleOnChange} value={filters.location} className="w-24 px-2 border-2 cursor-pointer rounded-full shadow-lg duration-300 active:outline-none focus:outline-none focus:ring dark:text-white">
                    <option value></option>
                    <option value={1}>Buenos Aires</option>
                    <option value={1}>Cordoba</option>
                    <option value={1}>Rosario</option>
                    <option value={1}>Salta</option>
                    <option value={1}>Mendoza</option>
                    <option value={1}>Entre Rios</option>
                    </select>
            </div>
            <div className="flex items-baseline ">
                <label htmlFor="score" className="p-2 font-bold text-base  dark:text-white text-black ">
                    Capacidad
                </label>
                <select onChange={handleOnChange} value={filters.capacity} className="w-24 px-2 border-2 cursor-pointer rounded-full shadow-lg duration-300 active:outline-none focus:outline-none focus:ring dark:text-white">
                    <option value></option>
                    <option value>1 a 5 personas</option>
                    <option value>10 a 15 personas</option>
                    <option value>15 a 20 personas</option>
                </select>
            </div>
            <div className="flex items-baseline ">
                <label htmlFor="score" className="p-2 font-bold text-base  dark:text-white text-black ">
                    Servicios
                </label>
                <select onChange={handleOnChange} value={filters.services} className="w-24 px-2 border-2 cursor-pointer rounded-full shadow-lg duration-300 active:outline-none focus:outline-none focus:ring dark:text-white">
                    <option value></option>
                    <option value>Cafeteria</option>
                    <option value>Pet Friendly</option>
                    <option value>Estacionamiento</option>
                    <option value>Bike Parking</option>
                    <option value>Buffet</option>
                    <option value>Natural Light</option>
                    <option value>Quiet Music</option>
                </select>
            </div>
            <div className="flex items-baseline ">
                <label htmlFor="score" className="p-2 font-bold text-base  dark:text-white text-black ">
                    Precios
                </label>
                    <select name="price" onChange={handleOnChange} value={filters.price} className="w-28 px-2 border-2 cursor-pointer rounded-full shadow-lg duration-300 active:outline-none focus:outline-none focus:ring dark:text-white">
                    <option value="reset"></option>
                    <option value="10-20">10-20 Usd</option>
                    <option value="20-30">20-30 Usd</option>
                    <option value="30-40">30-40 Usd</option>
                    <option value="40-50">40-50 Usd</option>
                </select>
            </div>
    </form>
</div>

)}