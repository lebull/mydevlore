import React from 'react';
import './Category.scss';
import { Answer } from './Answer';

export type CategoryProps = {
    principle: any,
}

export const Category = ({principle}: CategoryProps) => <div className="category">
    <h2>{principle.Title}</h2>
    <p>{principle.Description}</p>
    <ul>
        {principle.answers.map(
            (answer: any, index: any) => <Answer key={index} answer={answer}/>
        )}
    </ul>
</div>