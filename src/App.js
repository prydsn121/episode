
import "./App.css";
// import "./App.module.css"
import {useState} from "react";

function App() {
  const[todolist,setTodolist]=useState([]);
  const[newTask,setNewTask]=useState("");
  
const handleChange=(event)=>{
setNewTask(event.target.value);
};
const addTask=()=>{
  const task={
    id: todolist.length ===0 ? 1 :todolist[todolist.length-1].id+1,
     taskName:newTask,
  };
 
 setTodolist([...todolist,task]);

};
const deleteTask=(id)=>{
  // const arr=["pedro","jesica","james"];
  
  setTodolist(todolist.filter((task)=>task.id!==id));


    
}

  return (
    <div className="App">
      <h1>To do list</h1>
      <div className="addTask">
        <input onChange={handleChange}/>
        <button onClick={addTask}>Add Task</button>
              </div>
              <div className="list">
              {todolist.map((task)=>{
                return (<div className="task"> 
                  <h1>{task.taskName}</h1>
                  <button onClick={()=>deleteTask(task.id)}>X</button>
                  </div>
                );
              })}
              {/* {newTask} */}
              </div>
    </div>
  )


  
}
/*const User=(props)=>{
  return ( 
    <div>
    <h1>{props.salary}</h1>
    <h2>{props.position}</h2>
    <h3>{props.company}</h3>
    </div>
  );
};*/
export default App;
