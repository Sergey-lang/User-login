import React, {useEffect} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {LoginPage} from '../u-3-pages/LoginPage/LoginPage';
import {UserPage} from '../u-3-pages/UserPage/UserPage';
import {useDispatch, useSelector} from 'react-redux';
import {selectorIsLogged} from '../u-3-pages/UserPage/selectors';
import {setIsLoggedIn} from '../u-3-pages/LoginPage/auth-reducer';

import s from './App.module.scss'

export const PATH = {
    LOGIN: '/login',
    USER: '/user',
}

export const App: React.FC = () => {

    const isLoggedIn = useSelector(selectorIsLogged)

    const dispatch = useDispatch()
    useEffect(() => {
        if (localStorage.length) {
            dispatch(setIsLoggedIn(true))
        }
    }, [isLoggedIn])

    return (
        <div className={s.app}>
            <div className={s.content}>
                <Switch>
                    <Route path="/" exact render={() => <Redirect to={PATH.USER}/>}/>
                    <Route path={PATH.LOGIN} exact render={() => <LoginPage/>}/>
                    <Route path={PATH.USER} exact render={() => <UserPage/>}/>
                </Switch>
            </div>
        </div>
    );
}
