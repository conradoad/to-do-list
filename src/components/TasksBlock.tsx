import { useState } from 'react';

import styles from './TasksBlock.module.css'
import { TasksList } from './TasksList.';
import ITask from '../interfaces/ITask'
import { defineConfig } from 'vite';


export function TasksBlock() {

    const tasksInitialState: ITask[] = [
        {id: 1, description: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.', done: false},
        {id: 2, description: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.', done: true},
        {id: 3, description: 'Cccccc', done: false},
    ];

    // const tasksInitialState: ITask[] = [];

    const [ tasks, setTasks ] = useState(tasksInitialState);

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

                <TasksList tasks={tasks} />
            </div>
        </div>
    )
}