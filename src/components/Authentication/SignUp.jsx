import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../AuthContext/AuthContext';

const SignUp = () => {


    const { handelGoogleSingIn, handelGithubSingIn, handelSignUpWithEmail } = useContext(UserContext);

    const signInWithGoogle = (event) => {
        handelGoogleSingIn()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    const signInWithGithub = () => {
        handelGithubSingIn()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    const signUpWithEmail = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        handelSignUpWithEmail(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error))
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={signUpWithEmail} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link to='/login' className="label-text-alt link link-hover"><small>Already have an account</small></Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                        </form>
                        <div className='flex gap-2'>
                            <button onClick={signInWithGoogle} className="btn btn-info hover:bg-yellow-200 hover:text-black border-none">Sign In With Google</button>
                            <button onClick={signInWithGithub} className="btn btn-info hover:bg-yellow-200 hover:text-black border-none">Sign In With GitHub</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;