


export default function Filters() {

    return (

<div className="">
<form className="p-2 space-y-32 > * + * mt-8 ">
        <div class=" ">
                <label for="score" className="p-2 font-bold text-base  dark:text-white text-black ">
                  Rating
                 </label>
                <select class="w-24 px-2 border-2 cursor-pointer rounded-full shadow-lg duration-300 active:outline-none focus:outline-none focus:ring dark:text-white">
                    <option value></option>
                    <option value>1 <ion-icon name="star"></ion-icon></option>
                    <option value>2</option>
                    <option value>3</option>
                    <option value>4</option>
                    <option value>5</option>
                 </select>
             </div>
            <div class="flex items-baseline ">
                    <label for="score" className="p-2 font-bold text-base  dark:text-white text-black ">
                    Ubicacion
                    </label>
                    <select class="w-24 px-2 border-2 cursor-pointer rounded-full shadow-lg duration-300 active:outline-none focus:outline-none focus:ring dark:text-white">
                    <option value></option>
                    <option value>1</option>
                    </select>
            </div>
            <div class="flex items-baseline ">
                <label for="score" className="p-2 font-bold text-base  dark:text-white text-black ">
                    Capacidad
                </label>
                <select class="w-24 px-2 border-2 cursor-pointer rounded-full shadow-lg duration-300 active:outline-none focus:outline-none focus:ring dark:text-white">
                    <option value></option>
                    <option value>0 a 5 personas</option>
                    <option value>10 a 15 personas</option>
                    <option value>15 a 20 personas</option>
                </select>
            </div>
            <div class="flex items-baseline ">
                <label for="score" className="p-2 font-bold text-base  dark:text-white text-black ">
                    Servicios
                </label>
                <select class="w-24 px-2 border-2 cursor-pointer rounded-full shadow-lg duration-300 active:outline-none focus:outline-none focus:ring dark:text-white">
                    <option value></option>
                    <option value>Cafeteria</option>
                    <option value>Cafeteria</option>
                    <option value>Cafeteria</option>
                </select>
            </div>
            <div class="flex items-baseline ">
                <label for="score" className="p-2 font-bold text-base  dark:text-white text-black ">
                    Precios
                </label>
                    <select class="w-28 px-2 border-2 cursor-pointer rounded-full shadow-lg duration-300 active:outline-none focus:outline-none focus:ring dark:text-white">
                    <option value></option>
                    <option value>10-20 Usd</option>
                    <option value>20-30 Usd</option>
                    <option value>30-40 Usd</option>
                    <option value>40-50 Usd</option>
                </select>
            </div>
    </form>
</div>

)}