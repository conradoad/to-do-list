import styles from './Task.module.css'

import ITask from '../interfaces/ITask'
import trash from '../assets/trash.svg'

export function Task ( props: { task: ITask }) {

    const task = props.task;

    return (
        <div className={styles.task + " " + (task.done ? styles.taskDone : styles.taskUndone)}>
            <div className={styles.checkBox}></div>
            <p className={styles.description}>{task.description}</p>
            <div className={styles.deleteButton}></div>
        </div>
    )
}