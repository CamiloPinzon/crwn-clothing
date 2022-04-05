import { useState } from "react";
import {
    signInWithGoolgePopup,
    createUserDocumentFromAuth,
    signInAuthWithEmailAndPassword } from '../../utils/firebase/firebase.utils';

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import './sign-in-form.styles.scss';

const defaultFormFields = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const signInWithGoogle = async() =>{
        const {user}  = await signInWithGoolgePopup();
        await createUserDocumentFromAuth(user);
    }

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password} = formFields;

    const clearFormFields = () =>{
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await signInAuthWithEmailAndPassword(email, password);
            console.log(response);
            clearFormFields();
        } catch (error) {
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormFields({...formFields, [name]: value})
    }

    return (
        <div className="sign-up-container">
            <h2>Already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
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

                    <div className="buttons-container">
                        <Button type="submit" >Sign In</Button>
                        <Button onClick={signInWithGoogle} buttonType='google'>Goolge Sign In</Button>
                    </div>
            </form>
        </div>
    )
}

export default SignInForm;