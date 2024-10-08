
import { useNavigate } from 'react-router-dom';
const LandingPage = () => {

  const navigate = useNavigate();

  const goToQuizPage = () => {
    navigate('/quiz');
  };
 
    return (
      <button onClick={goToQuizPage}>Go to Quiz Page</button> /*Button for going to quiz page*/
    );
  };
  
  export default LandingPage;