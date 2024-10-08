
import { useNavigate } from 'react-router-dom';
import React, {useState} from 'react';

const WelcomePage = () => {

  const navigate = useNavigate();

  //form fields
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');

  const goToHomePage = () => {
    navigate('/'); // Navigate to the home page
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault(); //prevent page refresh

    //prep data to send
    const registrationData = {
        username,
        email,
        firstName,
        lastName,
    };

    //handle registration data
    console.log('Registration Data:', registrationData);

    //provide feedback to the user
    setMessage('Registration successful!');

    //reset form fields
    setUsername('');
    setEmail('');
    setFirstName('');
    setLastName('');
    };
    
    return (
        <div>
            <h1>Welcome to HackerCon</h1>
            <p>Welcome SuperHacker! You Are Inz</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>UserName:</label>
                    <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <label>First Name:</label>
                    <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    />
                </div>
                <button type="submit">Register for Hackathon</button>
            </form>
            {message && <p>{message}</p>}
            <button onClick={goToHomePage}>HOME</button>
        </div>
    );
};

export default WelcomePage;
  