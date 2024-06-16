import React, { useState } from 'react';
import Question from './Question';
import { useEffect } from 'react';

let id;
function Quiz({ questions }) {
    
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timer,setTimer]=useState(5);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  function handleSkip(){
    if(currentQuestion<questions.length-1)
    setCurrentQuestion((prev)=>prev+1);
    else
    setShowScore(true);
  }
  useEffect(() => {
    setTimer(5); 

    const id = setInterval(() => {
      setTimer((prev) => {
        if (prev < 1) {
          clearInterval(id);
          if (currentQuestion < questions.length - 1) {
            setCurrentQuestion((prev) => prev + 1);
          } else {
            setShowScore(true);
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(id); 
  }, [currentQuestion]);
  return (
    <div className="quiz">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (<>
        <Question 
          question={questions[currentQuestion]} 
          handleAnswerOptionClick={handleAnswerOptionClick} 
        />
        <button className='mt-[7vh]' onClick={handleSkip}>Skip Question</button>
        <p className='mt-[4vh]'>Time left: <span>{timer}</span></p>
        </>
      )}
    </div>
  );
}

export default Quiz;
