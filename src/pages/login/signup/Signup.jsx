import React from 'react'

export default function Signup() {
    return (
        <div className=" signup">
            <div className='card'>
            <div className="left">
                <h2>ZipSExtra <br />-</h2>
                <p>
                  Welcome to ZipS a social media app that allows you to stay connected with account followers allowing you to make posts and like them as well. 
                </p>
                <span>Don't Have An Account?</span>
                <button className='btn btn-primary'>Register</button>
            </div>
            <form className="right">
                  <input type="text" required placeholder='username' />
                  <input type="password" required placeholder='password' />
                  <button type='submit' className='btn'>Login</button>
            </form>
        </div>
        </div>
    )
}
