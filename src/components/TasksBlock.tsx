import styles from './TasksBlock.module.css'
import { TasksList } from './TasksList.';
import ITask from '../interfaces/ITask'

interface TasksBlockProps {
    tasks: ITask[],
    onToggleTask: (taskId: number) => void,
    onDeleteTask: (taskId: number) => void,
}


export function TasksBlock({ tasks, onToggleTask, onDeleteTask }: TasksBlockProps) {

    return (
        <div className={styles.tasksBlock}>
            <div className={styles.container}>
                
                {/* information elements */}
                <div className={styles.countersBlock}>
                    
                    <label className={styles.createdTasksCount}>Tarefas criadas 
                        <span>{tasks.length}</span>
                    </label>
                    
                    <label className={styles.doneTasksCount}>Tarefas concluídas
                        <span>
                            {tasks.filter(task => task.done == true).length + " "}
                            de 
                            {" " + tasks.length}
                        </span>
                    </label>

                </div>

                <TasksList
                    tasks={tasks}
                    onToggleTask={onToggleTask}
                    onDeleteTask={onDeleteTask} />
            </div>
        </div>
    )
}