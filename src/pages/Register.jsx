import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2'
import { Link } from 'react-router';

const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handelFormSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            Swal.fire({
                title: "Weak Password",
                text: "Password must be at least 6 characters long, include an uppercase and a lowercase letter.",
                icon: "warning",
            });
            return;
        }

        createUser(email, password)
            .then(res => {
                console.log(res.user);
                form.reset();
                const user = { email };

                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.insertedId) {
                            Swal.fire({
                                title: "Register Successfully",
                                icon: "success",
                                draggable: true
                            });
                        }
                    })
            })
            .then(error => {
                console.log(error);
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handelFormSubmit} className="fieldset">
                            <label className="fieldset-label">Name</label>
                            <input name='name' type="text" className="input" placeholder="Your Name" />

                            <label className="fieldset-label">Email</label>
                            <input name='email' type="email" className="input" placeholder="Email" />

                            <label className="fieldset-label">Photo URL</label>
                            <input name='photo' type="text" className="input" placeholder="Photo URL" />

                            <label className="fieldset-label">Password</label>
                            <input name='password' type="password" className="input" placeholder="Password" />
                            <button className="btn btn-neutral mt-4">Register</button>
                        </form>
                        <p className='text-center'>Already have account? <Link to='/login' className='hover:underline text-blue-400'>please Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;