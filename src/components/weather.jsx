import {useState,useEffect} from "react";
import { Seven } from "./seven";
export const Weather=()=>{
    const [data,setData] = useState([]);
    const [latest,setLatest] = useState([]);
    const [flag,setFlag] = useState(false);
    const [text,setText] = useState("")
    const date = new Date((latest.current||{}).sunset*1000)
    console.log(data)
    
    
    useEffect(()=>{
        getlatest();
    },[data])
    const getdata = async()=>{
        const data1 = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=2f9a21edf4eaaa2da93674af38937278&units=metric`).then((d)=>d.json());
        setData(data1)
        setFlag(true)
    }
    const getlatest = async()=>{
        const data1 = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&exclude={part}&appid=2f9a21edf4eaaa2da93674af38937278&units=metric`).then((d)=>d.json());
        setLatest(data1);
    }
    return <div className="box">
        <input className="navbar" type="text" placeholder="Enter City Name" onChange ={(e)=>{
            setText(e.target.value)
        }}/>
        <br/>
        <div className="search"><button className="search" onClick = {()=>{
            getdata();
        }}><img className="search1"  src="https://img.icons8.com/ios/2x/search.png"/></button></div>
       <Seven temp={latest}/>
       <div >{flag?<div className="new_box">
           <span className="temp1">{data.name}</span>
            <div className="temp1">{flag?<div>{Math.round((((latest.daily||[])[0]||[]).temp||{}).max)}<span>&#176;</span>C<span className="side"><img className="icon1" src="https://cdn-icons-png.flaticon.com/128/2698/2698213.png" alt="" /></span></div>:null}</div>
            <div className="box2">
                <div>Pressure<p>{(latest.current||{}).pressure} hpa</p></div>
                <div>Humidity<p>{(latest.current||{}).humidity}%</p></div></div>
                <div className="box2">
                <div>Sunrise<p>{new Date((latest.current||{}).sunrise*1000).getHours()} am</p></div>
                <div>Sunset<p>{new Date((latest.current||{}).sunset*1000).getHours()} pm</p></div></div>
                </div>:null}
       </div>
       


    </div>
}