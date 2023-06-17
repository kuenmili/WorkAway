import React  from "react";
import cardList from "./datalist"

const CategoryFilter = () => {
    return (
        <div className = 'max-w-max p-5 bg-[#1b1b1b] rounded-md space-y-2' >
            {cardList.map((card) => (
            <div key = {card.location} className = 'flex items-center gap-2'>
            <input type="checkbox"/>
            <label>{card.location}</label>
            </div>
            ))}
        </div>             
    )
}  


export default CategoryFilter