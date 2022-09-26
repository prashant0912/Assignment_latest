import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {Weather} from "./components/weather";
import {ColorRing} from 'react-loader-spinner';


function App() {
  const [loading,setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false)
    },3000)
  },[])
  return (
    <div className="App">
     {loading?<div className="loading"><ColorRing
  visible={true}
  height="200"
  width="200"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
/></div>:
      (<Weather/>)}
    </div>
  );
}

export default App;
