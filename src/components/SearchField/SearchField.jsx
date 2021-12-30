import React from "react";
import './SearchField.css'




export const SearchField = ({handleChange}) => {
    return <div className="">
                <input  className="search" type="search" name="" id=""  placeholder="search monsters" onChange={handleChange}/>
           </div>
}