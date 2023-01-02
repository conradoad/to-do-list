import styles from './Input.module.css'

import plusImg from '../assets/plus.svg'
import { ChangeEvent, EventHandler, InvalidEvent, useState } from 'react';

export function Input(props: { onAddNewTask: (description: string) => void }) {

    const [newTaskDescription, setNewTaskDescription] = useState("")

    function handleAddNewTask() {
        props.onAddNewTask(newTaskDescription);
        setNewTaskDescription("");
    }

    function handleNewTaskDescriptionChange(e: ChangeEvent<HTMLInputElement>) {
        setNewTaskDescription(e.target.value)
    }

    return (
        <div className={styles.inputTask}>

            <div className={styles.container}>
                <input
                    type="text"
                    placeholder="Adicione uma nova tarefa"
                    value={newTaskDescription}
                    onChange={handleNewTaskDescriptionChange}

                />
                <div className={styles.button + (newTaskDescription === "" ? " " + styles.disabled : "")}
                    onClick={handleAddNewTask}>
                    <span>Criar</span> <img src={plusImg} />
                </div>
            </div>

        </div>
    )
}