import React,{useRef,useState,useEffect} from 'react';
import Video from '../15-darst/video3.mp4';

const UseRefHook = () =>{
    const ref = useRef();
    const [play,setPlay] = useState (false);
    useEffect(()=>{
        setInterval(()=>{
            console.log(ref.current.currentTime);
            if(ref.current.ended){
                alert ("tugadi")
            }
        },1000)
    },[])

    const plays = () =>{
        console.log(ref);
        if(play){
            ref.current.pause();
            setPlay(!play)
        }
    }
    return(
        <div className="vidiolar">
            <div className="video">
            <video src="https://htmlbase.ru/storage/app/media/demo.mp4" controls></video>
            {/* <button onClick {plays}>Play</button> */}
            </div>
            <div className="video">
                <video src={Video} controls></video>
            </div>
        </div>
    )
}
export default UseRefHook;

