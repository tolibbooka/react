import React, {useState,useRef } from "react";

const Player = () =>{
    const ref = useRef();
    const [play,setPlay] = useState(false);
    const [input,setInput] = useState(0);
    let time;

    const player = () =>{
        if(ref.current.ended){
            alert('tugadi')
            clearInterval(time)
        }else{
            setInput((ref.current.currentTime/ref.current.duration)*100)
        }
    }
    const playFun = () =>{
        if(play){ 
            ref.current.pause()
            setPlay(!play)
        }else{
            ref.current.play()
            setPlay(!play)
            time = setInterval(plays,1000)
        }  
        console.log(ref); 
     }
     const playTime = (e) =>{
         console.log(e.target.value);
         ref.current.currentTime =(ref.current.duration/100)* e.target.value;
         setInput(e.target.value)
     }
     return(
         <div>
        <div className="video">
            <video src="https://htmlbase.ru/storage/app/media/demo.mp4" controls></video>
            <button onClick={palyFun}>play</button>
        </div>
       <input type="range" value={input} onChange={playTime} />
       </div>
     )
}