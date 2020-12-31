import React from 'react'

function LoginForm() {
    return (
        <form>
            <div className="form-inner">
                <h2>Login</h2>
                <div className="form-group">
                    <label htmlFor="account_id">Account ID</label>
                    <input type="text" name="account_id" id="account_id"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password"/>
                </div>
                <input type="submit" value="Login"/>
            </div>
        </form>
    )
}

export default LoginForm
