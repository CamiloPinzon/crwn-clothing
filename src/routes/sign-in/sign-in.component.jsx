import { signInWithGoolgePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../components/sign-up-form/sign-up-form.compoent';

const SignIn = () => {
    const logGoolgeUser = async() =>{
        const {user}  = await signInWithGoolgePopup();
        await createUserDocumentFromAuth(user);
    }
    return(
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoolgeUser}>Sign in with google button</button>
            <SignUpForm />
        </div>
    )
}

export default SignIn;