import React from 'react';

import styles from "./Transactions.module.css"

const Transactions = ({blockNumber,timeStamp,hash}) =>{
    return (
        <div className={styles.container}>
            
            <span className={styles.name}>{blockNumber}</span>
            <span className={styles.currentPrice}>{timeStamp}</span>
            <span > {hash}</span>
        </div>
    );
};

export default Transactions;