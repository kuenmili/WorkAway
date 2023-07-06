import SearchIcon from '@heroicons/react/24/outline/MagnifyingGlassIcon';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCoworkSpace, getCoworkSpacesBySearch } from '../redux/actions/coworkSpaces';


export default function Search () {
    const dispatch = useDispatch()
    const [name, setName] = useState('')

function handleInputChange(event){
    setName(event.target.value)
}

function handleInputSubmit(event){
    event.preventDefault()
    console.log(name)
    dispatch(getCoworkSpacesBySearch({name}))

}


return (

    <form className="flex justify-center">
            <input
                type="text"
                className="rounded border 2 p-2 text-sm focus:ring-0 w-80 dark:text-black text-black"
                placeholder="Search coworking spaces"
                onChange={(event)=>handleInputChange(event)}
                /> 
            <button
                className="rounded rounded-tl-none rounded-bl-none p-3 text-sm dark:text-black text-white bg-indigo-800" 
                type="submit"
                onClick={(event)=>handleInputSubmit(event)}
                >     
            <SearchIcon className="h-5 w-5"></SearchIcon>
            </button> 
       </form>
    )}