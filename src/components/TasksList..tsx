import styles from './TasksList.module.css'

import clipboard_img from '../assets/clipboard.svg'
import ITask from '../interfaces/ITask'
import { Task } from './Task'

export function TasksList( props: { tasks: ITask[] } ) {

    const tasks = props.tasks;

    let content = [<></>];

    if (tasks.length == 0) {
        content = (
            [<>
                <img src={clipboard_img} alt="" />
                <p>
                    <span>Você ainda não tem tarefas cadastradas</span>
                    <br/>Crie tarefas e organize seus itens a fazer
                </p>
            </>]
        )
    }
    else {
        content = tasks.map(task => {
            return <li key={task.id}> <Task task={task} /></li>
        })
    }

    return (
        <ul className={styles.tasksList + (tasks.length == 0 ? " " + styles.emptyList : "")}>
            {content}                        
        </ul>
    )
}