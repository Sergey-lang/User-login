import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAuthUserData, logout} from '../LoginPage/auth-reducer';
import {selectorIsLogged, selectorRequestStatus, selectorUserData} from './selectors';
import SuperButton from '../../u-4-components/Button/SuperButton';
import {Redirect} from 'react-router-dom';
import {PATH} from '../../u-1-app/App';
import Preloader from '../../u-4-components/Preloader/Preloader';

import s from './UserPage.module.scss'

export const UserPage: React.FC = () => {
    const {email, name} = useSelector(selectorUserData)
    const status = useSelector(selectorRequestStatus)
    const isLoggedIn = useSelector(selectorIsLogged)

    const dispatch = useDispatch()
    useEffect(() => {
        if (isLoggedIn)
            dispatch(getAuthUserData())
    }, [isLoggedIn, dispatch]);

    if (!isLoggedIn) {
        return <Redirect to={PATH.LOGIN}/>
    }

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <div className={s.wrapper}>
            {status === 'loading'
                ? <Preloader/>
                : <div className={s.use_block}>
                    <div className={s.user_info}>
                        <div className={s.info}>{email}</div>
                        <div className={s.info}>{name}</div>
                    </div>
                    {
                        isLoggedIn && (
                            <div className={s.logout_btn_wrapper}>
                                <SuperButton onClick={logoutHandler} className={s.logout_btn}>LOGOUT</SuperButton>
                            </div>)
                    }
                </div>
            }
        </div>
    );
}

