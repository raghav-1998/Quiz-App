function Start({startQuiz}){
    return (
        <div className="start">
            <h1>Take the Quiz</h1>
            <h4>Whenever You Want</h4>
            <button className="btnCSS" onClick={startQuiz}>Begin</button>
        </div>
    );
}

export default Start;