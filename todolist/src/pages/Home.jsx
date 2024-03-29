import React, { useEffect, useState } from 'react';
import { Create } from '../components/Create.jsx';
import '../App.css'; // CSS dosyası doğru şekilde çağrılıyor
import axios from 'axios';
import ActionButton from '../components/ActionButton.jsx';

const Home = () => {
    const [todos, setTodos] = useState([]);

    useEffect(()=>{
        try {
            axios
                .get('http://localhost:3000/')
                .then((res)=>{
                    setTodos(res.data.data);
                })
        } catch (error) {
            
        }
    })

    return (
        <div className="home"> {/* CSS sınıfı doğru şekilde uygulanıyor */}
            <h2>Todo List</h2>
            <Create/>
            {
                todos.length === 0
                ?
                <div><h2>No Record</h2></div>
                : 
                todos.map((todo,index)=>(
                    <div key={todo._id}>
                        <p>{todo.task}</p>
                        <ActionButton name='Delete' id={todo._id}/>
                    </div>
                ))
            }
        </div>
    );
};

export default Home;
