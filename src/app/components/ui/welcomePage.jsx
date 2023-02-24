import React from 'react'
import { Link } from 'react-router-dom'

const WelcomePage = () => {
    return (
        <div className="text-center" style={{ paddingTop: '60px' }}>
            <div className="mb-3">
                <h2>Welcome to </h2>
                <h1>Wallet App </h1>
            </div>
            <hr />
            <div style={{ marginBottom: '60px', marginTop: '60px' }}>
                <h4>
                    In this application, you can control your income and
                    expenses. Keep a record of them. Enjoy it.
                </h4>
            </div>
            <hr />
            <div style={{ marginTop: '60px' }}>
                <h4>
                    {' '}
                    To get started, you need to <Link to="/login">
                        signIn
                    </Link>{' '}
                    . If you dont have an account, you need to{' '}
                    <Link to="/login">signUp</Link>
                </h4>
            </div>
        </div>
    )
}

export default WelcomePage
