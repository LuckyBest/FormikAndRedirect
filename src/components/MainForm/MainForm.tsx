import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../../store/actions/Settings';
import * as Yup from 'yup';
import 'yup-phone';
import s from './MainForm.module.scss';
import { useNavigate } from 'react-router';


const Schema = Yup.object({
    name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
    surname: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
    phoneNumber: Yup.string().phone('Hello').required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
});


export const MainForm = ({...props}):JSX.Element => {

    const dispatch = useDispatch();
    let history = useNavigate();

    const submitClickHandler = async ({...values} ) => {
        const {name, surname, phoneNumber} = values;
        await dispatch(addUser({name, username:surname, id: phoneNumber}));
        history('/users');
    }

    return (
        <Formik 
            initialValues={{
                name:'',
                surname:'',
                phoneNumber: '',
                email: ''
            }}

            validationSchema = {Schema}
            onSubmit = {(values, action) => submitClickHandler(JSON.parse(JSON.stringify(values)))}
        >
            <Form className = {s.container}>
                <div className = {s.container_wrap}>
                    <div className = {s.personal_data}>
                        <div>
                            <span>Name:</span>
                            <Field name="name" type="text"/>
                            <p>
                                <ErrorMessage name = "name"/>
                            </p>
                        </div>
                        <div>
                            <span>Surname:</span>
                            <Field name="surname" type="text"/>
                            <p>
                                <ErrorMessage name="surname"/>
                            </p>
                        </div>
                    </div>
                    <div className = {s.phone_number}>
                        <span className = {s.number}>Phone number:</span>
                        <Field name="phoneNumber" type="text" />
                        <p>
                            <ErrorMessage name = "phoneNumber"/>
                        </p>
                    </div>
                    <div className = {s.email}>
                        <span>Email:</span>
                        <Field name="email" type="email"/>
                        <p>
                            <ErrorMessage name = "email"/>
                        </p>
                    </div>
                        <div className = {s.submit}>
                            <button type ="submit">Submit</button>
                        </div>
                </div>
            </Form>
        </Formik>
    );
}
