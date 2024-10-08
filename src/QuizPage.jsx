
import { useNavigate } from 'react-router-dom';
import React from 'react';
import {useState} from 'react';


const QuizPage = () => {

  const navigate = useNavigate();

  const questions = [ //array of MC questions for the quiz
    {
        question: "What is the primary purpose of HTML in web development?",
        options: [
            "To style the web page",
            "To define the structure and content of a web page",
            "To make web pages interactive",
            "To manage server-side logic"
        ],
        answer: 1 //index of the correct answer
    },
    {
        question: "Which of the following is a popular back-end JavaScript runtime environment?",
        options: [
            "Django",
            "Ruby on Rails",
            "Node.js",
            "ASP.NET"
        ],
        answer: 2 //index of the correct answer
    },
    {
        question: "Which HTTP method is commonly used to retrieve data from a server?",
        options: [
            "POST",
            "PUT",
            "GET",
            "DELETE"
        ],
        answer: 2 //index of the correct answer
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [quizPassed, setQuizPassed] = useState(false);

  //add to selected answers to later validate
  const handleAnswerSelect = (index) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestionIndex] = index;
    setSelectedAnswers(updatedAnswers);
  };

  //handle submit button
  const handleSubmit = () => {
    //check if all answers are correct
    const allCorrect = selectedAnswers.every((answer, index) => answer === questions[index].answer);

    if (allCorrect){
        setQuizPassed(true);
        navigate('/welcome'); //navigate to welcome page if quiz passed
    } else {
        alert("You did not pass the quiz. Try again.");
    }
  };
 
    return (
      <div>
        <h1>Take Quiz to Qualify</h1>
        <p>Welcome to the qualifier quiz</p>

        {/*Checking and going through quiz questions*/}
        {currentQuestionIndex <questions.length ? (
            <div>
                <h2>{questions[currentQuestionIndex].question}</h2>
                <ul>
                    {questions[currentQuestionIndex].options.map((option,index) => (
                        <li key={index}>
                            <button onClick={() => handleAnswerSelect(index)}>{option}</button>
                        </li>
                    ))}
                </ul>
                <button 
                onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
                disabled={selectedAnswers[currentQuestionIndex] === undefined}
                >
                    Next Question
                </button>
                </div>
        ) : (
            <div>
                <h2>You've completed the quiz!</h2>
                <button onClick={handleSubmit}>Submit Quiz</button>
                </div>
            )}
        </div>
    );
};

  
  export default QuizPage;
  