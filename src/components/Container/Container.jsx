import React from 'react';
import styles from './Container.module.css';

const Container = ({ children, title, mainTitle }) => {
    const totalsClass = [styles.container];
    return (
        <div className={totalsClass}>
            <h1 className={styles['title']}>{mainTitle}</h1>
            <h2 className={styles['title']}>{title}</h2>
            {children}
        </div>
    );
};

export default Container;
