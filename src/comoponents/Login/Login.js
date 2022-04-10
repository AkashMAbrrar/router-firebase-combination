import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { signInwithGoogle } = useFirebase();
    return (
        <div>
            <h3>Please Login Before You Die!</h3>
            <div style={{ margin: '20px' }}>
                <button onClick={signInwithGoogle}>Google Sign In</button>
            </div>
            <form>
                <input type="email" placeholder='provide your eamil' />
                <br />
                <input type="password" name="" id="" placeholder='password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;