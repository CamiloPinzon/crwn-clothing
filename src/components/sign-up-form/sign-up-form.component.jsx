import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import {SignUpContainer} from './sign-up-form.styles';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const clearFormFields = () =>{
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword) {
            alert("Password and confirm password doesn't match");
            return;
        }

        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, {displayName});
            clearFormFields();
        } catch (error) {
            if(error.code === 'auth/email-already-in-use') {
                alert('can not create user, email already in use');
            } else {
                console.error(error.code);
            }
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormFields({...formFields, [name]: value})
    }

    return (
        <SignUpContainer>
            <h2>Don't have an account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Display name'
                    inputOptions = {
                        {
                            type: 'text',
                            required: true,
                            onChange: handleChange,
                            name: 'displayName',
                            value: displayName
                        }
                    }
                    />
                
                <FormInput
                    label='E-mail'
                    inputOptions = {
                        {
                            type: 'email',
                            required: true,
                            onChange: handleChange,
                            name: 'email',
                            value: email
                        }
                    }/>
                
               <FormInput
                    label='Password'
                    inputOptions = {
                        {
                            type: "password",
                            required: true,
                            onChange: handleChange,
                            name: "password",
                            value: password
                        }
                    }/>
                
                <FormInput
                    label='Confirm Password'
                    inputOptions = {
                        {
                            type: 'password',
                            required: true,
                            onChange: handleChange,
                            name: 'confirmPassword',
                            value: confirmPassword
                        }
                    }/>

                <Button type="submit" >Sign Up</Button>
            </form>
        </SignUpContainer>
    )
}

export default SignUpForm;