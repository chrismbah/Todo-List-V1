import React, { useState } from 'react'
import "./index.css"
import Task from './Task'


export default function App() {

    const [newTask ,setNewTask] =useState("") //What we task
    const [todoList,setTodoList] =useState([]) //Contaiining all tasks
    
    function handleChange(e){
        setNewTask(e.target.value)
    }
    function addTask(){
        const task ={
            id:todoList.length===0? 1:todoList[todoList.length-1].id+1,
            taskName:newTask,
            completed:false
        }
        setTodoList([...todoList,task]) //Arranges task in a list of other tasks
    }
    function deleteTask(id){
        const newTodoList =todoList.filter((task)=> task.id!==id)
        setTodoList(newTodoList)
    }
    function completeTask(id){
        setTodoList(todoList.map((task)=>{
            if(task.id===id){
                return {...task,completed:true}
            }
            else{
                return task
            }
        }))
    }
    
    
    return (
    <div className='App'>
        <h3>Todo-List App</h3>
        <div className="addTask">
            <input className='input' type="text" onChange={handleChange}  /> 
            <button className='btn1' onClick={addTask}>Add task</button>
        </div>
        <div className="list">
            {todoList.map((task)=>{ 
                return ( 
                <Task 
                taskName={task.taskName}
                id={task.id}
                delete={deleteTask}
                completeTask={completeTask}
                completed={task.completed}
                  />)
            })}
        </div>
    </div>
  )
  
}

