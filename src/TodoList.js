import React, {useState} from "react"
import "./App.css"
import "./TodoList.css"



function TodoList() {

  const [todos, setTodos] = useState("");
  const [tasklist, settasklist] = useState([]);

  const submitHandler = (e) => {
    setTodos(e.target.value);
  }

  const AddTask = () => {
    if(todos !== ""){
      const taskDetails = {
          id: Math.floor(Math.random()*1000),
          value: todos,
          isCompleted: false, 
        }
        settasklist([...tasklist, taskDetails]);
      }
    };
    console.log("tasklist",tasklist);

  const deleteTodo = (e, id) => {
      e.preventDefault();
      settasklist(tasklist.filter(t => t.id !== id));
  }

  const doneTodo = (e, id) => {
      e.preventDefault();
      const element = tasklist.findIndex(elem => elem.id = id);
      const newTaskList = [...tasklist];
      newTaskList[element] = {
          ...newTaskList[element],
          isCompleted: true,
      };
      settasklist(newTaskList);
  }
  return (
    <div className="App">
       <input type='text' 
       name='text' 
       id='text' 
       placeholder='Add task here' 
       onChange={e => submitHandler(e)} />
       <button className="add__btn" onClick={AddTask}>Add</button>
       {tasklist !== [] ? 
       <ul className="list">
           {tasklist.map((t) => (
               <li className={t.isCompleted ? "crossText" : "listitem"}>
                   {t.value}
                   <button className="delete" onClick={(e) => deleteTodo(e, t.id)}>Delete</button>
                   <button className="done" onClick={(e) => doneTodo(e, t.id)}>Done</button>
               </li>
           ))}
       </ul>
       
       : null}
    </div>
  );
}

export default TodoList