import styles from './Header.module.css'

import rocket_img from '../assets/rocket.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <div>
                <img src={rocket_img} alt="" />
                <p>
                    <span>to</span>do
                </p>
            </div>
        </header>
    );
}

