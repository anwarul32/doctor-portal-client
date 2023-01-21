import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const { createUser, updateUser, googleSignUp } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const navigate = useNavigate();
    

    const handleSignUp = data => {
        console.log(data);
        setSignUpError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('User Created Successfully.')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        navigate('/') 
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.error(error);
                setSignUpError(error.message)
            })
    }

    const handleGoogleSignUp = () => {
        googleSignUp()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/');
            })
            .catch(error => console.error(error))
    }


    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>

                <h2 className='text-2xl text-center font-bold'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)} >
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type='text'
                            {...register("name", { required: 'Name is required' })}
                            className='input input-bordered w-full max-w-xs' />
                        {errors.name && <p className='text-red-600 text-center text-xl my-1'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type='email'
                            {...register("email", { required: 'Email Address is required' })}
                            className='input input-bordered w-full max-w-xs' />
                        {errors.email && <p className='text-red-600 text-center text-xl my-1'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type='password'
                            {...register("password", { required: 'Please Enter Correct Password', minLength: { value: 6, message: 'Password must be 6 characters or longer' }, pattern: { value: /(?=.*[a-z])(?=.*[@$!%*#?&])(?=.*[0-9])/, message: 'Password must be strong' } })}
                            className='input input-bordered w-full max-w-xs' />
                        {errors.password && <p className='text-red-600 text-center text-xl my-1'>{errors.password?.message}</p>}
                        <label className="label"><span className="label-text"> Forget Password?</span></label>
                    </div>
                    <input type="submit" value='Sign Up' className='btn btn-neutral w-full ' />
                    {signUpError && <p className='text-red-600 my-2'>{signUpError}</p>}
                </form>
                <p className='my-2'>Already have an account <Link to='/login' className='text-secondary'>Please Login</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignUp} className='btn btn-outline w-full'>Continue With Google</button>
            </div>
        </div>
    );
};

export default SignUp;