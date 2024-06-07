import React from 'react'

export default function Login() {
    return (
        <div className='login'>
            <div className="left">
                <h2>ZipSExtra</h2>
                <p>
                    Welcome user to ZipS social media webpage where you can connect, post, and like all of your fellow Zippers posts!
                </p>
                <span>Don't Have Any Account?</span>
                <button className='btn btn-primary'>Register</button>
            </div>
            <form className="right">
             <input type="text" required placeholder='username' />
             <input type="password" required placeholder='password' />
             <button type='submit'>Login</button>
            </form>
        </div>
    )
}