import { useState } from "react";

const UrlShortener=({setUrlValue})=>{
    const[value,setValue]=useState("");

    const handleClick= ()=>{
        setUrlValue(value);
        setValue("");
    }


    return(
        <div className="url-cont">
            <h1>URL <span>SHORTENER</span></h1>
            <div>
                <input 
                   type='text' 
                   placeholder="Paste Url here"
                   value={value}
                   onChange={e=>setValue(e.target.value)}
                />
                <button onClick={handleClick}>Short</button>
            </div>
        </div>
    )
}
export default UrlShortener;    