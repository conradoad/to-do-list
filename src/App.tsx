import { useState } from 'react';
import { Header } from './components/Header'
import { Input } from './components/Input'
import { TasksBlock } from './components/TasksBlock'

import './global.css'
import ITask from './interfaces/ITask';

export function App() {

  // const tasksInitialState: ITask[] = [
  //   { id: 1, description: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.', done: false },
  //   { id: 2, description: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.', done: true },
  //   { id: 3, description: 'Cccccc', done: false },
  // ];

  const tasksInitialState: ITask[] = [];
  
  const [tasks, setTasks] = useState(tasksInitialState);

  function addNewTask(newDescription: string) {
    const newId = tasks.length > 0 ? (tasks[tasks.length - 1].id + 1) : 0;
    const newTask: ITask = {
      id: newId,
      description: newDescription,
      done: false
    }
    setTasks([...tasks, newTask])
  }

  function toggleTask(taskId: number) {
    const updatedTasks = tasks.map( task => {
      if (task.id === taskId) task.done = !task.done;
      return task;
    })

    setTasks(updatedTasks);
  }

  function deleteTask(taskId: number) {
    const updatedTasks = tasks.reduce(
      (acc: ITask[], task) => {
        if  (task.id === taskId) return acc;
        return [... acc, task]
      }, []
    );

    setTasks(updatedTasks);
  }

  return (
    <div className="App">
      <Header />
      <Input onAddNewTask={addNewTask}/>
      <TasksBlock 
        tasks={tasks}
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}/>
    </div>
  )
}