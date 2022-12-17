import React,{useState,useEffect} from 'react'
import './animatewords.css';
export default function AnimateWords() {
    const [IsFirst,setIsFirst] = useState(false);
    const [IsSecond,setIsSecond] = useState(false);
    const [IsThird,setIsThird] = useState(false);
    const [IsForth,setIsForth] = useState(false);
    const [IsFivth,setIsFivth] = useState(false);
    const [LeftSecond,setLeftSecond] = useState(49);
    const [LeftThird,setLeftThird] = useState(49);
    const [LeftForth,setLeftForth] = useState(49);
    const [LeftFivth,setLeftFivth] = useState(49);
    const Interval1 = setInterval(()=>{
        (LeftSecond!==0) ? setLeftSecond(LeftSecond-1):setLeftSecond(50)
    },200)
    if(LeftSecond === 50){
        clearInterval(Interval1)
    }
    const Interval2 = setInterval(()=>{
        (LeftThird!==0) ? setLeftThird(LeftThird-1):setLeftThird(50)
    },200)
    if(LeftThird === 50){
        clearInterval(Interval2)
    }
    const Interval3 = setInterval(()=>{
        (LeftForth!==0) ? setLeftForth(LeftForth-1):setLeftForth(50)
    },200)
    if(LeftForth === 50){
        clearInterval(Interval3)
    }
    const Interval4 = setInterval(()=>{
        (LeftFivth!==0) ? setLeftFivth(LeftFivth-1):setLeftFivth(50)
    },200)
    if(LeftFivth === 50){
        clearInterval(Interval4)
    }
    const styleSecond = {
        marginLeft:`${LeftSecond}px`
    }
    const styleThird = {
        marginLeft:`${LeftThird}px`
    }
    const styleForth = {
        marginLeft:`${LeftForth}px`
    }
    const styleFivth = {
        marginLeft:`${LeftFivth}px`
    }
    useEffect(()=>{
        setTimeout(()=>{
            setIsFirst(true)

        },1000)
    },[])
    useEffect(()=>{
        setTimeout(()=>{
            setIsSecond(true)

        },2000)
    },[])
    useEffect(()=>{
        setTimeout(()=>{
            setIsThird(true)

        },3000)
    },[])
    useEffect(()=>{
        setTimeout(()=>{
            setIsForth(true)

        },4000)
    },[])
    useEffect(()=>{
        setTimeout(()=>{
            setIsFivth(true)

        },5000)
    },[])
  return (
    <div className='animatewords'>

        {IsFirst&&<h1>H</h1>}{IsSecond&&<h1 style={styleSecond}>E</h1>}{IsThird&&<h1 style={styleThird}>L</h1>}{IsForth&&<h1 style={styleForth}>L</h1>}{IsFivth&&<h1 style={styleFivth}>O</h1>}

    </div>
  )
}
