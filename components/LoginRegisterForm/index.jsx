import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from "reactstrap";
import axios from "axios";
import FormInput from "components/Elements/FormInput";
import Button from "components/Elements/Button";
import AlertMessage from "components/AlertMessage";
import {scrollToPosition} from "../../utils/functions";
import Clickable from "components/Elements/Clickable";

const LoginRegisterForm = () => {

    // Data
    const loginForm = [
        {
            name: 'email',
            type: 'email',
            label: 'Email',
            placeholder: 'adam.smith@gmail.com'
        },
        {
            name: 'password',
            type: 'password',
            label: 'Password',
            placeholder: '***********'
        },
    ];
    const registerForm = [
        {
            name: 'first-name',
            type: 'text',
            label: 'First Name',
            placeholder: 'Adam'
        },
        {
            name: 'last-name',
            type: 'text',
            label: 'Last Name',
            placeholder: 'Smith'
        },
        {
            name: 'email',
            type: 'email',
            label: 'Email',
            placeholder: 'adam.smith@gmail.com'
        },
        {
            name: 'password',
            type: 'password',
            label: 'Password',
            placeholder: '***********'
        },
        {
            name: 'confirm-password',
            type: 'password',
            label: 'Confirm Password',
            placeholder: '***********'
        },
    ];
    const forgotForm = {
        name: 'email',
        type: 'email',
        label: 'Email',
        placeholder: 'adam.smith@gmail.com'
    };

    // State
    const [tabActive, setTabActive] = useState(1);
    const [loginFormState, setLoginFormState] = useState({
        email: '',
        password: ''
    });
    const [forgotFormState, setForgotFormState] = useState({
        email: '',
    });


    // Function


    // useEffect(() => {
    //     if (form.first_name.length === 0 ||
    //         form.last_name.length === 0 ||
    //         form.email.length === 0 ||
    //         form.telephone.length === 0 ||
    //         form.message.length === 0) {
    //         setCheckError(false);
    //     } else {
    //         setCheckError(true);
    //     }
    // }, [form]);

    return (
        <Container fluid className="login-register-form" data-aos>
            <Row>
                <Col xs={12} className="login-form-hold">

                    <ul className="tab-nav">
                        <li className="nav-items">
                            <Button className={`item-buttons ${tabActive === 1 ? 'active' : ''}`}
                                    onClick={() => setTabActive(1)}>Login</Button>
                        </li>
                        <li className="nav-items">
                            <Button className={`item-buttons ${tabActive === 2 ? 'active' : ''}`}
                                    onClick={() => setTabActive(2)}>Register</Button>
                        </li>
                    </ul>

                    {tabActive === 1 && <div className="tab-section">
                        <h1 className="heading-one">Login</h1>
                        {loginForm.map((item, key) =>
                            <FormInput
                                key={`input-key-${key}`}
                                form={loginFormState}
                                setForm={setLoginFormState}
                                name={item.name}
                                value={item.name}
                                type={item.type}
                                label={item.label}
                                placeholder={item.placeholder}
                                // errorActive={errorActive}
                                // loading={loading}
                            />)}

                        <Clickable onClick={() => setTabActive(3)}>Forgotten Password</Clickable>
                        <Button>Login</Button>
                    </div>}

                    {tabActive === 2 && <div className="tab-section">
                        <h1 className="heading-one">Register</h1>
                        <p className="body-copy">Please fill out all fields to register.</p>
                        {registerForm.map((item, key) =>
                            <FormInput
                                key={`input-key-${key}`}
                                form={loginFormState}
                                setForm={setLoginFormState}
                                name={item.name}
                                value={item.name}
                                type={item.type}
                                label={item.label}
                                placeholder={item.placeholder}
                                // errorActive={errorActive}
                                // loading={loading}
                            />)}
                        <Button>Register</Button>
                    </div>}

                    {tabActive === 3 && <div className="tab-section">
                        <h1 className="heading-one">Forgotten Password</h1>
                        <p className="body-copy">Enter your email address and we will send you a link to change your password.</p>
                        <FormInput
                            form={forgotFormState}
                            setForm={setForgotFormState}
                            name={forgotForm.name}
                            value={forgotForm.name}
                            type={forgotForm.type}
                            label={forgotForm.label}
                            placeholder={forgotForm.placeholder}
                            // errorActive={errorActive}
                            // loading={loading}
                        />
                        <Clickable onClick={() => setTabActive(1)}>Back to Login</Clickable>
                        <Button>Send email</Button>
                    </div>}
                </Col>


                {/*<Col xs={12} className="contact-form-message" id="contact-form-message">*/}
                {/*    {showMessage && <AlertMessage*/}
                {/*        success={success}*/}
                {/*        failed={failedToSend}*/}
                {/*    />}*/}
                {/*</Col>*/}
            </Row>
        </Container>
    )
}

export default LoginRegisterForm;