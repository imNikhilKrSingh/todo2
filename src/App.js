import './App.css';
import { useState } from 'react';
import { AiFillDelete } from "react-icons/ai";
import { RiEditFill } from "react-icons/ri";



function App() {

const [input, setInput] = useState("");
const [list, setList] = useState([]);
const [taskIndex,setTaskIndex] = useState();
const [update, setUpdate] = useState(false);

const handleInput = (e)=>{
  setInput(e.target.value);
}

const handleTask = ()=>{
  setList([...list, input]);
  setInput("");
}

const handleUpdate = ()=>{
  list.splice(taskIndex, 1, input);
  setInput("");
  setUpdate(false);
}

const handleDelete = (index)=>{
  const filterList = list.filter((elem)=> elem !== list[index])
  setList(filterList);
  
}

const handleEdit = (index)=>{
  const filterList = list.filter((elem)=> elem === list[index])
  setInput(filterList[0]);
  setTaskIndex(index);
  setUpdate(true);
  }


  return (
    <div className="App">
      <h1> Todo App </h1>

      <div className="container">
        <div className="input-box">
          <input className="inputBox" type="text" value={input} onChange={(e)=>handleInput(e)} placeholder="Enter your task..."/>
          { update ? <button className="updateTaskButton" onClick={handleUpdate}> Update Task </button> :
            <button className= "addTaskButton" onClick={handleTask}> Add Task </button> }
        </div>

        <br></br>
        <div className="list">
          <ul>
            {list.map((item, index)=><li key={index}>{item}               
            <AiFillDelete className="deleteIcon" onClick={()=>handleDelete(index)}/>
            <RiEditFill className="editIcon" onClick={()=>handleEdit(index)}/> </li>)}
          </ul>
        </div>
      </div>

    </div>
  );
}

export default App;
