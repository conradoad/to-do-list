import { Header } from './components/Header'
import { Input } from './components/Input'
import { TasksBlock } from './components/TasksBlock'

import './global.css'

export function App() {

  return (
    <div className="App">
      <Header />
      <Input />
      <TasksBlock />
    </div>
  )
}