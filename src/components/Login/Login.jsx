import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Login = () => {
    const [error, setError] = useState()
    const [success, setSuccess] = useState()

    const {user, signIn} = useContext(AuthContext)
    
    console.log(user)

    const handleSubmit=(event)=>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
    
        console.log(email, password)

        signIn(email, password)
        .then(result=>{
            const loggedUser = result.user
            console.log(loggedUser)
            
            setSuccess('login success')
            setError('')

        })
        .catch(error=>{
            console.log(error.message)
            setError(error.message)
        })


    }


    return (

        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' required placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' required placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className='mx-2 mb-2'>
                        <Link to="/register" className="label-text-alt link link-hover text-xl ">Don't have account? Please Register </Link>
                    </div>
                    <p className='text-xl ms-2 mb-1 text-emerald-500'>{success}</p>
                    <p className='text-xl ms-2 mb-1 text-red-500'>{error}</p>
                </div>

            </div>
        </div>

    );
};

export default Login;