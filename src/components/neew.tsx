import {useState} from 'react'

export default function neew() {
  const [obj, setObj]=useState({
   firstName:"Sumayia",
   lastName:"Alam",
   age:23
  });

const change=()=>{
  setObj(
   
    prev=>({
      ...prev, age:10
    })

  )
}

  return (
    <div>
      <h1>{obj.age}</h1>
      <button onClick={change}> Change</button>
      
    </div>
  )
}



