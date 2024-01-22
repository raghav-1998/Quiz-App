import { useState } from 'react';
import qBank from './QuestionsList';
import ScoreCount from "./ScoreCount";
import DisplayQuestions from "./DisplayQuestions";
import FinishMessage from './FinishMessage';
function Quiz({onRestart}){
    const questionBank=qBank;
    const [score,setScore]=useState(0);
    const [currentQuestion,setCurrentQuestion]=useState(0);
    const [selectedOption,setSelectedOption]=useState("");
    const [quizEnd,setQuizEnd]=useState(false);

    const handleOptionChange=(event)=>{
        setSelectedOption(event.target.value)
    }

    const checkAnswer=()=>{
        const question=currentQuestion;
        let quizScore=score;
        const option=selectedOption; 
        if(option===questionBank[question].answer){
          quizScore=quizScore+1;
          setScore(quizScore);
        }
    }
    
    const handleNextQuestion=()=>{
        let question=currentQuestion;
        if(question+1<questionBank.length){
          question=question+1;
          setCurrentQuestion(question);
          setSelectedOption("");
        }

        else{
          setQuizEnd(true);
        }
    }

    const handleFormSubmit=(event)=>{
        event.preventDefault();
        checkAnswer();
        handleNextQuestion();
    }

    return (

      <>
        {
          !quizEnd ?(
            <>
              <ScoreCount score={score}/>
              <DisplayQuestions question={questionBank[currentQuestion]} selectedOption={selectedOption}
                onOptionChange={handleOptionChange} onFormSubmit={handleFormSubmit}/>
            </>
            
          ):(
            <FinishMessage score={score} onRestart={onRestart}/>
          )
        }
      </>
    );
}

export default Quiz;