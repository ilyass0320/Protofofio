import './index.css'
import ProtofolioAceuil from './pages/elements/ProtofolioAceuil'
import About from './pages/elements/About'
import Contact from './pages/elements/Contact'
import { Starfield } from './pages/NavBar/StarFeild';
import axios from 'axios';
import { useEffect, useState } from 'react';
const App = () => {
  // const [message,setMessage]=useState("");
  // useEffect(()=>{
  //   axios.get("http://localhost:5000/")
  //   .then((response)=>{setMessage(response.data.message);
  //   })
  //   .catch((error)=>{console.log(error)});
  // },[]);
  return (
    <div className="min-h-screen">
      {/* {message} */}
      <Starfield />
      <ProtofolioAceuil/>
      <About/>
      <Contact/>
    </div>
  )
}

export default App
