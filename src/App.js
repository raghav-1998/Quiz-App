import { useState } from "react";
import QuizName from "./components/QuizName";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Start from "./components/Start";
import Quiz from "./components/Quiz";

function App(){
  const [quizStart,setQuizStart]=useState(false);
  //const [quizEnd,setQuizEnd]=useState(false);

  const handleStartButton=()=>{
    setQuizStart(true);

  }

  const handleRestartButton=()=>{
    setQuizStart(false);
  }

  return (
    <div className="">
      {/*
              <QuizName></QuizName>
      {
        !quizEnd ?(
          <>
            <ScoreCount score={score}/>
            <DisplayQuestions question={questionBank[currentQuestion]} selectedOption={selectedOption}
              onOptionChange={handleOptionChange} onFormSubmit={handleFormSubmit}/>
          </>
          
        ):(
          <FinishMessage score={score}/>
        )
      }
      */}
      {quizStart?<Quiz onRestart={handleRestartButton}/>:<Start startQuiz={handleStartButton}/>}
    </div>
  );
}

export default App;