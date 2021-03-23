import React from 'react';
import s from './Preloader.module.css';

export const Preloader: React.FC = React.memo(() => {
    return (
        <div className={s.preloader_wrapper}>
            <div className={s.loader}>Loading...</div>
        </div>
    );
})

