import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../AuthContext/AuthContext';

const Login = () => {
    const { handelLogIn, loading, setLoading, handelGoogleSingIn, handelGithubSingIn, handelReset } = useContext(UserContext);
    const [error, setError] = useState();
    const [mail, setMail] = useState();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();

    if (loading) {
        return <div><progress className="progress w-16"></progress></div>
    }

    const signInWithEmail = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        handelLogIn(email, password)
            .then(result => {
                navigate(from, { replace: true });

            })
            .catch(error => {
                alert(error)
                setLoading(false)
            })
    }

    const signInWithGoogle = (event) => {
        handelGoogleSingIn()
            .then(result => {
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }

    const signInWithGithub = () => {
        handelGithubSingIn()
            .then(result => {
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }


    const getEmail = (event) => {
        event.preventDefault();
        const email = event.target.value;
        setMail(email);
        console.log(email);
    }

    const resetPassword = () => {
        handelReset(mail)
            .then(result => {
                alert('reset mail send . please check your inbox/spam folder')
            })
            .catch(error => {
                console.log(error);
            })

    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col mb-2">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Login now!</h1>
                    </div>
                    <form onSubmit={signInWithEmail} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input onBlur={getEmail} type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="">
                                    <Link to='/signup' className="label-text-alt pr-3 link link-hover hover:text-sky-900"><small>New hear</small></Link>
                                    <Link onClick={resetPassword} className="label-text-alt link link-hover hover:text-sky-900"><small>Reset Password</small></Link>
                                </label>
                                <p className='text-red-500'>{error?.error}</p>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <button onClick={signInWithGoogle} className="btn btn-info hover:bg-yellow-200 hover:text-black border-none">Sign In With Google</button>
                            <button onClick={signInWithGithub} className="btn btn-info hover:bg-yellow-200 hover:text-black border-none">Sign In With GitHub</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;