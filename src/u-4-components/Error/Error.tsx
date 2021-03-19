import React from 'react';
import s from './Error.module.css'

type PropsType = {
    error: string
}

const Error: React.FC<PropsType> = ({error}) => {
    return (
        <div className={s.error_wrapper}>
            <div className={s.error}>{error ? error : ''}</div>
        </div>
    )
}

export default Error;
