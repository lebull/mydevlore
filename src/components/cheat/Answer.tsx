import React from 'react';
import './Answer.scss';

export type AnswerProps = {
    answer: {
        Title: string,
        Situation: string,
        Task: string,
        Action: string,
        Result: string,
    }
}

export const Answer = ({answer}: AnswerProps) => 
    <div className="answer">
        <h3>{answer.Title}</h3>
        <ul>
            <li>{answer.Situation}</li>
            <li>{answer.Task}</li>
            <li>{answer.Action}</li>
            <li>{answer.Result}</li>
        </ul>
    </div>