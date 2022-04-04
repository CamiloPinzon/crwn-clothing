import { signInWithGoolgePopup } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
    const logGoolgeUser = async() =>{
        const response  = await signInWithGoolgePopup();
        console.log(response);
    }
    return(
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoolgeUser}>Sign in with google button</button>
        </div>
    )
}

export default SignIn;