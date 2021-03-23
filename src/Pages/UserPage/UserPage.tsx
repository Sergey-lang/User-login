import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectorAppError, selectorIsLogged, selectorRequestStatus, selectorUserData} from './selectors';
import {Button} from '../../Components/Button/Button';
import {Preloader} from '../../Components/Preloader/Preloader';
import {Error} from '../../Components/Error/Error';
import {getAuthUserData, logout} from '../../redux/auth-reducer';
import s from './UserPage.module.scss'
import {Redirect} from 'react-router-dom';
import {PATH} from '../../App/App';

export const UserPage: React.FC = React.memo(() => {

    const {email, name} = useSelector(selectorUserData)
    const status = useSelector(selectorRequestStatus)
    const error = useSelector(selectorAppError)
    const isLoggedIn = useSelector(selectorIsLogged)

    const logoutHandler = useCallback(() => {
        dispatch(logout())
    },[])

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAuthUserData())
    }, []);

    if (!isLoggedIn) {
        return <Redirect to={PATH.LOGIN}/>
    }

    return (
        <div className={s.wrapper}>
            {status === 'loading'
                ? <Preloader/>
                : <div className={s.user_block}>
                    <div className={s.user_info}>
                        <div className={s.info}>{email}</div>
                        <div className={s.info}>{name}</div>
                    </div>
                    {
                        isLoggedIn && (
                            <div className={s.logout_btn_wrapper}>
                                <Button onClick={logoutHandler} className={s.logout_btn}>LOGOUT</Button>
                            </div>)
                    }
                    {error && <Error error={error}/>}
                </div>
            }
        </div>
    );
});

