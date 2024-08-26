import {useState} from "react";
import { useRecoilValue, useSetRecoilState} from "recoil";
import {userState} from "../States/UserState";
import { useForm, SubmitHandler } from "react-hook-form"

export const Login = () => {
    const setUserState = useSetRecoilState(userState);
    const userData = useRecoilValue(userState);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleLogin = (data) => {
        const { email, password } = data;
        if (email !== "admin@admin.com" || password !== '123456'){
            console.log("Wrong credentials");
            return;
        }
        setUserState({
            "LoggedIn": true,
            "email": email
        });
    };

    const logoutUser = () => setUserState({});

    return (
        <>
            {!userData.LoggedIn ? (
                <>
                    <h2>Login</h2>
                    <form className={'loginForm'} onSubmit={handleSubmit(handleLogin)}>
                        <input
                            {...register('email', { required: 'Email is required' })}
                            placeholder='Unesite vas email'
                            type='email'
                        />
                        {errors.email && <p>{errors.email.message}</p>}
                        <br/>
                        <input
                            {...register('password', { required: 'Password is required' })}
                            placeholder='Unesite vas password'
                            type='password'
                        />
                        {errors.password && <p>{errors.password.message}</p>}
                        <br/>
                        <button type='submit'>Login</button>
                    </form>
                </>
            ) : (
                <button type='button' onClick={logoutUser}>Logout</button>
            )}
        </>
    );
}

export default Login;
