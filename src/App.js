import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {

  //initially the tasks were insisde the Tasks.js component, but in order to have a global access
  //we put it into the App component.
  //This way will assure the state is in the higher level and can be used for other components
  //As we're mapping the tasks inside the Tasks.js, dont forget to pass it as a props to the Tasks component
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeding at School',
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

  //Delete Task
  const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header />
      {/* passing the tasks as props to Tasks.js */}
      {/* ternary operator to decide what to display when empty */}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : 'No Tasks to Show' }
      
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
