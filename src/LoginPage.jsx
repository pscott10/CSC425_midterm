
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';

const LoginPage = () => {

  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    //validate user credentials
    if (username === 'user' && password === 'pass'){
        navigate('/landing'); //navigate to the landing page after verifying credentials
    } else {
        setErrorMessage('Invalid username or password'); //Error message for wrong credentials
    }
  };

    return (
      <div>
        <h1>Login Here</h1>
        <p>This is the Login Page.</p>

        <div>
        <h1>You have landed</h1>
        <p>Welcome Potential Hackers</p>

        <div>
            <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
        </div>
        <div>
            <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>} {/*Display error message if applicable*/}
        <button onClick={handleLogin}>Go to Quiz Page</button>
      </div>
      </div>
    );
  };
  
  export default LoginPage;
  