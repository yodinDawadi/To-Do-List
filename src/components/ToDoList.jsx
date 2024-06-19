import React from 'react'
import { useState,useRef } from 'react'
import bin from '../assets/bin.svg'

function ToDoList() {
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState("")
    
    const addTask=()=> {
        if(newTask !=""){
            setTasks([...tasks,newTask])
        setNewTask("")
        }
        
    }
    const deleteTask = (index)=>{
      const updateTask = tasks.filter((_,i)=>i !== index)
      setTasks(updateTask);
    }
  return (
    <>
    <div className='h-screen w-screen flex items-center justify-center bg-slate-900'>
    <div className=' w-4/5 md:w-1/2  border-2 border-indigo-500 rounded-3xl min-h-96 flex-wrap p-10 md:p-10 -mt-12 md:-mt-10'>
        <div className='h-16 mb-3'>
            <p className='w-full text-center text-white text-xl md:text-3xl'>Add Your To Do Lists📝</p>
        </div>
        
         <div className='w-full h-full'>
            <input type="text" className='w-9/12 rounded-3xl h-7 text-xs md:text-base md:h-10  border-none outline-none pl-3' value={newTask} placeholder='Enter Your Todos...'
            onChange={(e)=>{setNewTask(e.target.value)}}
            />
            <button className='bg-indigo-500 text-white w-1/4 text-xs md:text-base rounded-3xl h-7 md:h-10'
            onClick={addTask}>Add</button>
         </div>
         <div className='w-full mt-5'>
        <ol className=' gap-3 flex items-center justify-center flex-wrap'>
         {
            tasks.map((task,index)=>
            <li key={index} className='w-full min-h-7 md:min-h-10 md:w-4/5 p-2 flex items-center justify-center bg-indigo-500 text-white rounded-lg'>
                <p className='w-auto text-sm md:text-lg mr-auto'>{index+1+")"}</p>
                <p className='w-full pl-3 text-sm md:text-lg text-left'>{task}</p>
                <img src={bin} onClick={()=>deleteTask(index)} className='md:h-4 h-3 w-3 md:w-4 cursor-pointer' />
            </li>
            )
         }
        </ol>
         </div>
    </div>
    </div>
    </>
  )
}

export default ToDoList
