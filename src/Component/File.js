import React, {useState} from 'react'
import './File.css';

export default function File() {
    const [num, setNum] = useState(0);
    const Increase = ()=>{
        setNum(num + 1);
        // num > 0 ?setNum(num -1):display = false
    }
    const Decrease = ()=>{
        // num <= 0 ?setNum(num -1):display = true
        setNum(num -1)
    }
    const Resat = ()=>{
        setNum(0)
    }
  return (
    <div className='contanior'>
        <div className='cildDiv'>
        <h1 className='number'>{num}</h1>
        <button className='btn' onClick={Increase}>Increase</button>
        <button className='btn' onClick={Decrease}>Decrease</button>
        <button className='btn' onClick={Resat}>Resat</button>
        </div>
    </div>
  )
}
