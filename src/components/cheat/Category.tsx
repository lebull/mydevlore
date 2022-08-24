import React from 'react';
import './Category.scss';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faClock, faSquare } from '@fortawesome/free-solid-svg-icons'

export type CategoryProps = {
    principle: any,
}

const orderAnswers = (answer1: any, answer2: any) => {

    const answerToScore = (answer: any): number => {
        let sum = 0;

        if(isPopulated(answer)){
            sum += 4
        }
        if(isRecent(answer)){
            sum += 2
        }
        if(isGood(answer)){
            sum += 1
        }

        return sum;
    }

    return (answerToScore(answer2) - answerToScore(answer1));
}

let isPopulated = (answer: any) => 
    answer.Title 
        && answer.Situation 
        && answer.Task 
        && answer.Action 
        && answer.Result;

let isRecent = (answer: any) => answer.Recent === true
let isGood = (answer: any) => answer.Good === true


export const Category = ({principle}: CategoryProps) => <div className="category">
    <h2>{principle.Title}</h2>

    <p>{principle.Description}</p>
    <ul className="questions">
        {principle.questions.map((question: any, index: number) => <li key={index}>{question.text}</li>)}
    </ul>

    <div className="storyContainer">
        {principle.answers.filter((answer: any) => !answer.archived).sort(orderAnswers).map((answer: any, index: any) => {

            let icons = [];

            if(isGood(answer)){
                icons.push(<span className="good">
                    <FontAwesomeIcon icon={faStar} />
                </span>)
            }
            if(isRecent(answer)){
                icons.push(<span className="recent">
                    <FontAwesomeIcon icon={faClock} />
                </span>)
            }
            if(!isPopulated(answer)){
                icons.push(<span className="bad">
                    <FontAwesomeIcon icon={faSquare} />
                </span>)
            }

            return <Link key={index} to={`/answers/${answer.id}`} className="story">
                <div className="icons" children={icons}/>
                <div className="text">{answer.Title}</div>
                
            </Link>
        })}
    </div>
</div>