import React, {useState} from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';

import signinImage from '../assets/signup.jpg';

const initialState = {
    fullName : '',
    username: '',
    password: '',
    confirmPassword = '',
    phoneNumber: '',
    avatarURL: '',
}

const Auth = () => {
    const [form, setForm] = useState(initialState);

    const [isSignup, setIsSignup] = useState(true);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value});
    }
 

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup); 
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <div className="auth__form-container">
            <div className="auth__form-container_fields">
                <div className="auth__form-container_field-content">
                    <p>{isSignup ? 'Sign Up' : 'Sign In'}</p>
                    <form onSubmit={(handleSubmit) => {}}>
                        {
                            isSignup && (
                                <div className="auth__form-container__fields-content_input">
                                    <label htmlFor="fullName">Full Name</label>
                                    <input 
                                        type="text"
                                        name="fullName"
                                        placeholder = "Full Name"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            )}
                            <div className="auth__form-container__fields-content_input">
                                    <label htmlFor="username">Username</label>
                                    <input 
                                        type="text"
                                        name="username"
                                        placeholder = "Full Name"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                {isSignup && (
                                <div className="auth__form-container__fields-content_input">
                                    <label htmlFor="phoneNumber">Phone Number</label>
                                    <input 
                                        type="text"
                                        name="phoneNumber"
                                        placeholder = "Phone Number"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            )}
                            {isSignup && (
                                <div className="auth__form-container__fields-content_input">
                                    <label htmlFor="avatarURL">Avatar</label>
                                    <input 
                                        type="text"
                                        name="avatarURL"
                                        placeholder = "Avatar URl"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            )}
                            <div className="auth__form-container__fields-content_input">
                                    <label htmlFor="password">Password</label>
                                    <input 
                                        type="password"
                                        name="password"
                                        placeholder = "Password"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                {isSignup && (
                                <div className="auth__form-container__fields-content_input">
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                    <input 
                                        type="password"
                                        name="confirmPassword"
                                        placeholder = "Confirm Password"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            )}
                            <div className="auth__form-container_fields-content_button">
                                <button>{isSignup ? "Sign Up" : "Sign In"} </button>

                            </div>
                    </form>
                    <div className="auth__forms-container_fields-accounts">
                            <p>
                                {isSignup
                                 ? "Already have a account?"
                                 : "Don't have a account?"
                                }
                                <span onClick={switchMode}>
                                    {isSignup ? 'Sign In' : 'Sign Up'}
                                </span>
                            </p>
                    </div>
                </div>

            </div>
            <div className="auth__form-container_image">
                <img src={signinImage} alt="sign in" />
            </div>
        </div>
    )
}

export default Auth