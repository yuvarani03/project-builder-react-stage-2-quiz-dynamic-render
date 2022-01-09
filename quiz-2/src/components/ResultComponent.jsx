import React, {Component} from 'react';
export default class ResultComponent extends Component{
    render(){
        return(
            <div className="container">
            <div className="icon"><img src="./img/result.png" alt=""/></div>
            <h2>Result</h2>
            <div className="result">
                <div className="msg">You need more pratice</div>
                <h1 className="score">Your Score: 20%</h1>
                <div className="score-details">
                <p className="qu">Number of Questions:</p><p className="cnt">15</p>
                <p className="qu">Number of attempts:</p><p className="cnt">9</p>
                <p className="qu">Number of correct answers:</p><p className="cnt">3</p>
                <p className="qu">Number of wrong answers:</p><p className="cnt">6</p>
                </div>
            </div>
            <div className="btm">
                <button className="pa">Play Again</button>
                <button className="bth">Back to Home</button>
            </div>
            </div>  
        );
    }
}