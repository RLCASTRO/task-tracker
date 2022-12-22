import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {

  //initially the tasks were insisde the Tasks.js component, but in order to have a global access
  //we put it into the App component.
  //This way will assure the state is in the higher level and can be used for other components
  //As we're mapping the tasks inside the Tasks.js, dont forget to pass it as a props to the Tasks component
  const [showAdd, setShowAdd] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'Feb 5th at 2:30pm',
      reminder: false,
    },
  ])

  //Add task
  const addTask = (task) => {
    //create a random id number for each task
    const id = Math.floor(Math.random() * 10000) + 1

    //this will concatenate the id in the task object
    const newTask = {id, ...task}

    // console.log(...tasks, newTask)
    //add the new task to the end of the tasks array 
    setTasks([...tasks, newTask])

  }
  

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))

  }

  return (
    <div className="container">
      {/* here I'm passing a function as a prop to the Header component.
      I have to catch this in the button component and triggers in the onClick event */}
      <Header onAdd={() => setShowAdd(!showAdd)} showAdd={showAdd} />
      {/* the AddTask show will be conditioned to the showTask state. Lets wrap it in a curly lbraces and create a conditional statement */}
      {/* this is called conditional rendering */}
      {/* this && simple ternary condition statement without the else part */}
      { showAdd && <AddTask onAdd={addTask} />}
      {/* passing the tasks as props to Tasks.js */}
      {/* ternary operator to decide what to display when empty */}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks to Show'}

    </div>
  );
}

// if you want to work with classes
// import React from 'react';
// class App extends React.Component{
//   render(){
//     return <h1>hello from a class</h1>
//   }
// }


export default App;
