import React, {ChangeEvent} from 'react';
import {FormikErrors, useFormik} from 'formik';
import SuperInputText from '../Input/SuperInputText';
import SuperButton from '../Button/SuperButton';

import s from './LoginForm.module.scss'

export interface FormValues {
    clientId: number,
    email: string,
    password: string,
}

interface OtherProps {
    callback: (value: FormValues) => void
}

const validate = (values: FormValues) => {
    let errors: FormikErrors<FormValues> = {};

    if (!values.clientId) {
        errors.clientId = 'Required';
    } else if (values.clientId.toString().length === 0) {
        errors.clientId = 'Must be 1 characters or more';
    } else if (values.clientId.toString().length > 5) {
        errors.clientId = 'Must be 10 characters or less';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 4) {
        errors.password = 'Must be 4 characters or more';
    } else if (values.password.length > 10) {
        errors.password = 'Must be 10 characters or less';
    }

    return errors;
}

export const LoginForm: React.FC<OtherProps> = ({callback}) => {

    const formik = useFormik({
        initialValues: {
            clientId: 1,//
            email: 'user@ozitag.com',//
            password: 'user',//
        },
        validate,
        onSubmit: (values,{ setSubmitting }) => {

            callback(values)
            setSubmitting(false)
        },
    });

    const renderInput = (id: string, name: string, type: string, className: string, error: string | undefined, onChange: (e: ChangeEvent) => void, value: number | string, placeholder?:string) => {
        return <SuperInputText
            id={id}
            name={name}
            type={type}
            className={className}
            error={error}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
        />
    }

    return (
        <div className={s.form_wrapper}>
            <div className={s.header}>
                <h1>FLy&TAG</h1>
            </div>
            <div className={s.form}>
                <p>Login into your account</p>
                <form onSubmit={formik.handleSubmit}>

                    {renderInput('clientId', 'clientId', 'text', s.input, formik.errors.clientId, formik.handleChange, formik.values.clientId, 'Enter ID')}

                    {renderInput('email', 'email', 'text', s.input, formik.errors.email, formik.handleChange, formik.values.email, 'Enter Email')}

                    {renderInput('password', 'password', 'text', s.input, formik.errors.password, formik.handleChange, formik.values.password, 'Enter Password')}

                   <div className={s.form_btn_wrapper}>
                       <SuperButton type="submit" className={s.form_btn}>Log in</SuperButton>
                   </div>
                </form>
            </div>
        </div>
    )
}





