import React, { useState } from 'react';
import '../App.css'; // CSS dosyası doğru şekilde çağrılıyor
import axios from 'axios';
import ActionButton from './ActionButton';

export const Create = () => {
  const [task,setTask]=useState();

  return (
    <div className="create_form"> {/* CSS sınıfı düzeltiliyor */}
        <input type="text" placeholder='Enter Task!' onChange={(e)=>setTask(e.target.value)}/>
        <ActionButton name='Add' task={task}/>
    </div>
  );
};