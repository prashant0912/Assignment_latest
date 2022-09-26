export const Seven = ({temp})=>{
var today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
    return <div className="container">
        {(temp.daily||[]).map((e)=>{
            return <div>
                <div className="temp">{daylist[day++%7]}</div>
                <div className="temp">{Math.round((e.temp||{}).max)}<span>&#176;</span> {Math.round((e.temp||{}).min)}<span>&#176;</span></div>
                <br/>
                <img className="icon" src="https://cdn-icons-png.flaticon.com/128/2698/2698213.png" alt="" />
                {/* <div>{(e.clouds<=50)?}<h3>Clouds</h3>:Clear</div> */}
                <div className="temp">{e.weather[0].main}</div>
            </div>
        })}
        
    </div>
}