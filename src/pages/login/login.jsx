import { Link } from 'react-router-dom'
import './login.css'

export default function Login() {
    return (
    <div className="login">
        <div className='card'>
            <div className="left">
                <h2>ZipSExtra <br />-</h2>
                <p>
                    Welcome user to ZipS social media webpage where you can connect, post, and like all of your fellow Zippers posts!
                </p>
                <span>Don't Have Any Account?</span>
                <Link to='/signup'>
                  <button className='btn btn-primary'>Register</button>
                </Link>
            </div>
            <form className="right">
             <input type="text" required placeholder='username' />
             <input type="password" required placeholder='password' />
             <button type='submit'>Login</button>
            </form>
        </div>
    </div>
    )
}