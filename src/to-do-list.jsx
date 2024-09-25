

import React, {useState} from 'react'
function Hey(){

    const [tasks, setTasks] = useState(["eat", "code", "gym"]);
    const[newTask, setNewTask] = useState("");


    function handleInputChange(event)
    {
        setNewTask(event.target.value);

    }
    function addTask()
    {
        if(newTask.trim()!=="")
           {
            setTasks(t=>[...t,newTask]);
            setNewTask("");
           }
    }
    function deleteTask(index)
    {
        const updatedTasks = tasks.filter((_, i)=> i!==index)
        setTasks(updatedTasks);

    }
    function moveTaskUp(index)
    {
        if(index>0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index-1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    function moveTaskDown(index)
    {

        if(index<tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index+1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return(<div className='to-do-list'>
        <h1>To-Do-List</h1>
        <div>
            <input type="text"
            placeholder='Enter your tasks here'
            value={newTask}
            onChange={handleInputChange}/>
            <button className='add-button'
            onClick={addTask}
            >Add Task &#129300; </button>

        </div>
        <ol>
            {tasks.map((task, index)=>
            <li key={index}>
            <span className='text'> {task}</span>
            <button className='delete-button'onClick={()=> deleteTask(index)}>Delete</button>
            <button className='moveUp-button'onClick={()=> moveTaskUp(index)}>UP</button>
            <button className='moveDown-button'onClick={()=> moveTaskDown(index)}>Down</button>

            </li>

            )}


        </ol>

        </div>);
}
export default Hey;
