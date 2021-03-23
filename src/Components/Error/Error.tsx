import React from 'react';
import s from './Error.module.scss'

type PropsType = {
    error: string
}

export const Error: React.FC<PropsType> = React.memo(({error}) => {
    return (
        <div className={s.error_wrapper}>
            <div className={s.error}>{error ? error : ''}</div>
        </div>
    )
});

