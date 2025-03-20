import React, { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router';

const Login = () => {
    const { signInUser, handelGoogleLogin } = useContext(AuthContext);
    const [error, setError] = useState('');

    const handelFormSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                form.reset();
            })
            .catch(error => {
                setError(error.message);
                form.reset();
            })
    }



    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handelFormSubmit} className="fieldset">
                            <label className="fieldset-label">Email</label>
                            <input name='email' type="email" className="input" placeholder="Email" />
                            <label className="fieldset-label">Password</label>
                            <input name='password' type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </form>
                        <button onClick={handelGoogleLogin} className='text-center font-bold btn'>Google Login</button>
                        <p className='text-center'>New here? <Link to='/register' className='hover:underline text-blue-400'>please Register</Link></p>
                        <p className='text-red-700'>{error}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;