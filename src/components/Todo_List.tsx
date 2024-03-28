
import React, { useState } from "react";


export default function Todo_List() {
  const [text, setText]=useState('');
 
  const getInput=(event: { target: { value: React.SetStateAction<string>; }; })=>{
       setText(event.target.value);
  }
  const added=()=>{
     
  }
  return (
    <div className="main1">
       <input type="text" placeholder="Add New Task" className="input1" value={text} onChange={getInput}/>
       <button type="submit" className="btn btn-success" onClick={added}>Add</button>
    </div>
  )
}
