import './login.css';

function Login() {
  return (
    <div className="Login">
        <div className='textforms'>
            <h3>Sign in Library</h3>
            <div className='inputs'>
                <p>Input Username</p>
                <input type='text' id='input'/>
                <p>Input password</p>
                <input type='text' id='input'/>
            </div>
            <div className='checkboxes'>
                <p>Check role:</p>
                <div>
                    <input type='radio' name='radio'/>
                    <label for='librarian'>Librarian</label>
                </div>
                <div>
                    <input type='radio' name='radio'/>  
                    <label for='reader'>Reader</label>  
                </div>
            </div>
            <div className='buttons'>
                <button>Sign in</button>
                <button>Sign up</button>
            </div>
        </div>
    </div>
  );
}

export default Login;
