import React from 'react'
import cn from 'classnames'
import styles from './Chip.module.css';

const Chip = ({text, onClick, error}) => {
    return (
        <div className={cn(styles.container,{[styles.errorWrap]: error})}>
        <div className={cn(styles.item)}>
            {text}
        </div>
        <i className={cn('fas fa-times',styles.icon, {[styles.errorIcon]: error}) } onClick={onClick}></i>
    </div>
    )
}

export default Chip;