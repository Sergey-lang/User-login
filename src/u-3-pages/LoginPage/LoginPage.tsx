import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectorIsLogged, selectorRequestStatus} from '../UserPage/selectors';
import {FormValues, LoginForm} from '../../u-4-components/LoginForm/LoginForm';
import {Redirect} from 'react-router-dom';
import {login} from './auth-reducer';
import Preloader from '../../u-4-components/Preloader/Preloader';

import s from './LoginPage.module.css'

export const LoginPage: React.FC = () => {
    const status = useSelector(selectorRequestStatus)
    const isLoggedIn = useSelector(selectorIsLogged)

    const dispatch = useDispatch()

    const sentLoginData = (value: FormValues) => {
        let {clientId, email, password} = value
        dispatch(login(clientId, email, password))
    }

    if (isLoggedIn) {
        return <Redirect to={'/'}/>
    }

    return (
        <div className={s.wrapper}>
            {status === 'loading'
                ? <Preloader/>
                : <div>
                    <LoginForm callback={sentLoginData}/>
                </div>
            }
        </div>
    );
};




