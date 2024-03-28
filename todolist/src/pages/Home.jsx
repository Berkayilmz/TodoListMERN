import React, { useState } from 'react';
import { Create } from '../components/Create.jsx';
import '../App.css'; // CSS dosyası doğru şekilde çağrılıyor

const Home = () => {
    const [todos, setTodos] = useState([]);
    return (
        <div className="home"> {/* CSS sınıfı doğru şekilde uygulanıyor */}
            <h2>Todo List</h2>
            <Create/>
            {
                todos.length === 0
                ?
                <div><h2>No Record</h2></div>
                : 
                todos.map(todo=>(
                    <div>
                        {todo}
                    </div>
                ))
            }
        </div>
    );
};

export default Home;
