import {useState, useEffect} from "react"
import axios from 'axios';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const LinkRes=({urlValue})=>{
    const[shortlink,setShort]=useState("");
    const[copied,setCopied]=useState(false);
    const[loading,setLoading]=useState(false);
    const[error,setError]=useState(false);
    const fetchData = async()=>{
        try{
            setLoading(true);
            const res = axios(`https://api.shrtco.de/v2/shorten?url=${urlValue}`).then((data)=>setShort(data.data.result.full_short_link));
            
        }catch(err){
            console.log(err)
            setError(err)
        }finally{
            setLoading(false)
        }
    }
useEffect(()=>{
    if(urlValue.length){
        fetchData();
    }
},[urlValue]);    
useEffect(()=>{
    const timer = setTimeout(()=>{
        setCopied(false);
    },1000);
    return ()=>{clearTimeout(timer)}
},[copied])

if(loading){
    return <p className="noData">Loading...</p>
}

if(error){
    return <p className="noData">something went wrong</p>
}

    return(
        <>
        {
            shortlink && (
            <div className="link">
                <p>{shortlink}</p>
                <CopyToClipboard 
                  text={shortlink}
                  onCopy={()=>setCopied(true)}
                >
                    <button className={copied ? "copied" :""}>Copy Link</button>
                </CopyToClipboard>
            
        </div>)
        }
        {/* <div className="link">
                <p>{shortlink}</p>
                <CopyToClipboard 
                  text={shortlink}
                  onCopy={()=>setCopied(true)}
                >
                    <button className={copied ? "copied" :""}>Copy Link</button>
                </CopyToClipboard>
            
        </div> */}
        </>
    )
}
export default LinkRes;