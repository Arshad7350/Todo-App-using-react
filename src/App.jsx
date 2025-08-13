import { useEffect, useState } from 'react'
import './App.css'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import CreateTask from './Components/CreateTask';
import ListTask from './Components/ListTask';
import  { Toaster } from 'react-hot-toast';

function App() {
  const [tasks, setTasks] = useState([]);

  console.log("tasks", tasks)

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("tasks")));
  }, []);

  return (
    <>
    <DndProvider backend={HTML5Backend}>
    <Toaster />
   <div className='bg-slate-100 w-screen h-screen flex flex-col items-center gap-16 pt-32'>
     <CreateTask tasks={tasks} setTasks={setTasks} />
     <ListTask tasks={tasks} setTasks={setTasks}  />
   </div>
   </DndProvider>
   </>
  );
}

export default App
