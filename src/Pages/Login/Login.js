import { React, useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const { signIn, googleSignUp  } = useContext(AuthContext);
    const [ loginError, setLoginError ] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = data => {
        console.log(data);
        setLoginError('')
        signIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, { replace: true} );
            
        })
        .catch(error => {
            console.error(error.message);
            setLoginError(error.message);
        })
    }

    const handleGoogleSignIn =  () => {
        googleSignUp()
        .then( result => {
            const user = result.user;
            console.log(user);
            navigate('/' );
        })
        .catch( error => console.error(error))
    }


    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>

                <h2 className='text-2xl text-center font-bold'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type='email'
                            {...register("email", {
                                required: 'Email Address is required'
                            })}
                            className='input input-bordered w-full max-w-xs' />
                        {errors.email && <p className='text-red-600 text-center text-xl my-1'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type='password'
                            {...register("password", {
                                required: 'Please Enter Correct Password',
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }, pattern: { value: /(?=.*[a-z])(?=.*[@$!%*#?&])(?=.*[0-9])/, message: 'Password must be strong' }
                            })}
                            className='input input-bordered w-full max-w-xs' />
                        {errors.password && <p className='text-red-600 text-center text-xl my-1'>{errors.password?.message}</p>}
                        <label className="label"><span className="label-text"> Forget Password?</span></label>
                    </div>
                    <input type="submit" value='Login' className='btn btn-neutral w-full ' />
                    <div>
                        { loginError && <p className='text-red-600 my-2'>{loginError}</p>}
                    </div>
                </form>
                <p className='my-2'>New to Doctors Portal <Link to='/signup' className='text-secondary'>Create an Account</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>Continue With Google</button>
            </div>
        </div>
    );
};

export default Login;