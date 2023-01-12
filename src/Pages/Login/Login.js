import { React, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {

    const { register, handleSubmit } = useForm();
   
    const handleLogin = data =>{
        console.log(data);
    }


    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-2xl text-center font-bold'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input {...register("email")} type='email' className='input input-bordered w-full max-w-xs' />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input {...register("password")} type='password' className='input input-bordered w-full max-w-xs' />
                        <label className="label"><span className="label-text"> Forget Password?</span></label>
                    </div>
                    <input type="submit" value='Login' className='btn btn-neutral w-full ' />
                </form>
                <p className='my-2'>New to Doctors Portal <Link to='signup' className='text-secondary'>Create an Account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>Continue With Google</button>
            </div>
        </div>
    );
};

export default Login;