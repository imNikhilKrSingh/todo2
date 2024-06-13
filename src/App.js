import './App.css';
import { useState } from 'react';
import { AiFillDelete } from "react-icons/ai";


function App() {

const [input, setInput] = useState("");
const [list, setList] = useState([]);

const handleInput = (e)=>{
  setInput(e.target.value);
}

const handleTask = ()=>{
  setList([...list, input]);
  setInput("");
}

const handleDelete = (index)=>{
  const filterList = list.filter((elem)=> elem !== list[index])
  setList(filterList);
  
}


  return (
    <div className="App">
      <h1> Todo App </h1>
      <div className="container">
        <div className="input-box">
          <input type="text" value={input} onChange={(e)=>handleInput(e)}/> <button onClick={handleTask}> Add Task </button>
        </div>
        <div className="list">
          <ul>
            {list.map((item, index)=><li key={index} onClick={()=>handleDelete(index)}>{item} 
            <AiFillDelete/> </li>)}
          </ul>
        </div>
      </div>

    </div>
  );
}

export default App;
