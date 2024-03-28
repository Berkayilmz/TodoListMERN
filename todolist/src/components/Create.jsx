import React, { useState } from 'react';
import '../App.css'; // CSS dosyası doğru şekilde çağrılıyor
import axios from 'axios';

export const Create = () => {
  const [task,setTask]=useState();

  const handleAdd=()=>{
    axios.post('http://localhost:3000/add',{task:task})
      .then(result => console.log(result))
      .catch(err=>console.log(err));
  }
  return (
    <div className="create_form"> {/* CSS sınıfı düzeltiliyor */}
        <input type="text" placeholder='Enter Task!' onChange={(e)=>setTask(e.target.value)}/>
        <button onClick={handleAdd}>Add</button>
    </div>
  );
};