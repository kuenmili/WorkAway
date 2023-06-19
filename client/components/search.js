import SearchIcon from '@heroicons/react/24/outline/MagnifyingGlassIcon';


export default function Search () {
return (
    <form className="flex justify-center">
            <input
                onChange=""
                type="text"
                className="rounded border 2 p-2 text-sm focus:ring-0 w-80 dark:text-white text-black"
                placeholder="Search coworking spaces"/>
            <button
                className="rounded rounded-tl-none rounded-bl-none p-3 text-sm dark:text-white text-white bg-indigo-800 "
                type="submit">
            <SearchIcon className="h-5 w-5"></SearchIcon>
            </button> 
       </form>
    )}