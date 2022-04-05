import { Fragment, useState } from "react";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

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
                console.error(error);
            }
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormFields({...formFields, [name]: value})
    }

    return (
        <Fragment>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Display name</label>
                <input type="text" required="required" onChange={handleChange} name="displayName" value={displayName}/>
                <label htmlFor="">E-mail</label>
                <input type="email" required="required" onChange={handleChange} name="email" value={email}/>
                <label htmlFor="">Password</label>
                <input type="password" required="required" onChange={handleChange} name="password" value={password}/>
                <label htmlFor="">Confirm Password</label>
                <input type="password" required="required" onChange={handleChange} name="confirmPassword" value={confirmPassword}/>
                <button type="submit">Sign Up</button>
            </form>
        </Fragment>
    )
}

export default SignUpForm;