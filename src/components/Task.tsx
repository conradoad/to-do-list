import styles from './Task.module.css'

import ITask from '../interfaces/ITask'

interface TaskProps {
    task: ITask,
    onToggleTask: (taskId: number) => void,
    onDeleteTask: (taskId: number) => void,
}

export function Task ({task, onToggleTask, onDeleteTask} : TaskProps) {

    function handleToggleTask() {
        onToggleTask(task.id)
    }

    function handleDeleteTask() {
        onDeleteTask(task.id)
    }

    return (
        <div className={styles.task + " " + (task.done ? styles.taskDone : styles.taskUndone)}>
            <div className={styles.checkBox}
                onClick={handleToggleTask}
            ></div>

            <p className={styles.description}>{task.description}</p>
            
            <div className={styles.deleteButton}
                onClick={handleDeleteTask}
            ></div>
        </div>
    )
}