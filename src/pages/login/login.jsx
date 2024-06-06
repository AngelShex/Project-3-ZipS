import './login.css'

export default function Login() {
    return (
        <div className=" login">
            <div className='card'>
            <div className="left">
                <h2>ZipSExtra</h2>
                <p>
                  This is simply a test to a post that we might run paragraph 2  
                </p>
                <span>Don't Have An Account?</span>
                <button className='btn btn-primary'>Register</button>
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