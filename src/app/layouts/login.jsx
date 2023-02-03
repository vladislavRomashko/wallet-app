import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import LoginForm from '../components/ui/loginForm'
import RegisterForm from '../components/ui/registerForm'

const Login = () => {
    const { type } = useParams()
    const [typeForm, setTypeForm] = useState(
        type === 'register' ? type : 'login'
    )

    const toggleFormType = () => {
        setTypeForm((prevState) =>
            prevState === 'register' ? 'login' : 'register'
        )
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    {typeForm === 'register' ? (
                        <>
                            <h3 className="mb-4">Register</h3>
                            <RegisterForm />{' '}
                            <p className="mt-2">
                                Already have an account?{' '}
                                <a
                                    style={{ fontWeight: 'bold' }}
                                    role="button"
                                    onClick={toggleFormType}
                                >
                                    SignIn
                                </a>
                            </p>
                        </>
                    ) : (
                        <>
                            <h3 className="mb-4">Login</h3>
                            <LoginForm />{' '}
                            <p className="mt-2">
                                Dont have an account?{' '}
                                <a
                                    style={{ fontWeight: 'bold' }}
                                    role="button"
                                    onClick={toggleFormType}
                                >
                                    SignUp
                                </a>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Login
