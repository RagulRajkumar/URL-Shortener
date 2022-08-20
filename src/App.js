import { useState } from 'react';
import './App.css';
import BgAnimation from './BgAnimation';
import LinkRes from './LinkRes';
import UrlShortener from './UrlShortener';

function App() {
  const[urlValue,setUrlValue]=useState("");
  return (
    <div className="cont">
      <UrlShortener setUrlValue={setUrlValue}/>
      <BgAnimation/>
      <LinkRes urlValue={urlValue}/>
      {/* <p>Developed by <a href="https://www.linkedin.com/in/ragul-rajkumar/" className='name'>Ragul Rajkumar</a></p> */}
    </div>
  );
}

export default App;
