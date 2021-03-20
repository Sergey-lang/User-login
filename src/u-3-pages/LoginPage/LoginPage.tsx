import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectorAppError, selectorIsLogged, selectorRequestStatus} from '../UserPage/selectors';
import {FormValues, LoginForm} from '../../u-4-components/LoginForm/LoginForm';
import {Redirect} from 'react-router-dom';
import {login} from './auth-reducer';
import Error from '../../u-4-components/Error/Error';
import Preloader from '../../u-4-components/Preloader/Preloader';

import s from './LoginPage.module.scss'

export const LoginPage: React.FC = () => {
    const status = useSelector(selectorRequestStatus)
    const error = useSelector(selectorAppError)
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
                : <>
                    <LoginForm callback={sentLoginData}/>
                    {error && <Error error={error}/>}
                </>
            }
        </div>
    );
};




