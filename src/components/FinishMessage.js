function FinishMessage({score,onRestart}){
    return (
        <div className="finish">
            <h3>Quiz Over!!</h3>
            <h3>Your Score is: {score}</h3>
            <button className="btnCSS" onClick={onRestart}>Restart</button>
        </div>
    );
}

export default FinishMessage;