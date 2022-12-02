import React, { useContext } from 'react'
import "./login.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase"
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {

    const [error, setError] = React.useState(false)
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

    const navigate = useNavigate();

    const { dispatch } = useContext(AuthContext);

    const handlesubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                dispatch({ type: "LOGIN", payload: user })
                navigate("/")
                // ...
            })
            .catch((error) => {
                setError(true)
            });
    }

    return (
        <div className='login'>
            <form onSubmit={handlesubmit}>
                <label>Login</label>
                <input type="email" placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} />
                <button type='submit'>Login</button>
                {error && <span>wrong email & password</span>}
            </form>
        </div>
    )
}

export default Login
