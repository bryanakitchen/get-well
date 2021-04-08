import React from 'react';
import styles from './Header.module.css'
import alchemyLogo from '../../../public/alchemy-logo-white-bg.png'

export default function Header() {
    return (
        <div className={styles.header}>
            <img className={styles.alchemyLogo} src={alchemyLogo} alt='alchemy-logo' />
        </div>
    )
}
