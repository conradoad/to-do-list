import styles from './Input.module.css'

import plusImg from '../assets/plus.svg'

export function Input() {

    return (
        <div className={styles.inputTask}>

            <div className={styles.container}>
                <input type="text" placeholder="Adicione uma nova tarefa"/>
                <div className={styles.button}>
                    <span>Criar</span> <img src={plusImg} />
                </div>
            </div>

        </div>
    )
}