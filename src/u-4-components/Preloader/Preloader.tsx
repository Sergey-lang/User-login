import React from 'react';
import s from './Preloader.module.css';

const Preloader: React.FC = () => {
    return (
        <div className={s.preloader_wrapper}>
            <div className={s.loader}>Loading...</div>
        </div>
    );
}

export default Preloader;
