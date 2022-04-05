import { signInWithGoolgePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
    const logGoolgeUser = async() =>{
        const {user}  = await signInWithGoolgePopup();
        const userDocReference = await createUserDocumentFromAuth(user);
    }
    return(
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoolgeUser}>Sign in with google button</button>
        </div>
    )
}

export default SignIn;