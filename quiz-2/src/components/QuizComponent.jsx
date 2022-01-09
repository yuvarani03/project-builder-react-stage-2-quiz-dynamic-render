import React, {Component} from 'react';
import Questions from "../resources/questions.json";
export default class QuizComponent extends Component{
    constructor(){
        super();
        this.state = {
            questnum: 0
        }
    }
    nextQuest = () => {
        if(this.state.questnum <15){
        this.setState({
            questnum: (this.state.questnum + 1)
        })}
    }
    prevQuest = () => {
        if(this.state.questnum === 0){
        this.setState({
            questnum:(this.state.questnum)
        })}
        else{
        this.setState({
            questnum:(this.state.questnum - 1)
        })}
    }

    quitQuest = () => {
            this.setState(alert("Quiz has Ended"))
    }

    render(){
        return(
            <div className="container">
            <div className="quiz">
                <h1>Question</h1>
                <div className="quest">
                <p className="num">{this.state.questnum+1} of 15</p>
                <p className="que">{Questions[this.state.questnum].quest}</p>
                </div>
                <br/>
                <div className="opts">
                    <button className="opt">{Questions[this.state.questnum].A}</button>
                    <button className="opt">{Questions[this.state.questnum].B}</button>
                    <button className="opt">{Questions[this.state.questnum].C}</button>
                    <button className="opt">{Questions[this.state.questnum].D}</button>
                </div>
                <br/>
                <div className="change">
                    <button className="prev" onClick={this.prevQuest}>Previous</button>
                    <button className="nex" onClick={this.nextQuest}>Next</button>
                    <button className="end" onClick={this.quitQuest}>Quit</button>
                </div>
            </div>
            </div>
        )
    }
}