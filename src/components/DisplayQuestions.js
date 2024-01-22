import Options from "./Options";

function DisplayQuestions({question,selectedOption,onOptionChange,onFormSubmit}){
    return (
        <div className="displayQuestionContainer">
            <div className="questionSection">
                <div className="questionCount">
                    <h4>
                        Question:{question.id} 
                    </h4>
                </div>
                <div className="questionText">
                    {question.question}
                </div>
            </div>

            <div className="answerSection">
                <Options options={question.options} selectedOption={selectedOption} onOptionChange={onOptionChange}></Options>
                <div>
                    <input className="btn btn-primary" type="submit" value="Submit" onClick={onFormSubmit}/>
                </div>
            </div>
        </div>
    );
}

export default DisplayQuestions;