import React from 'react';
import './Category.scss';

export type CategoryProps = {
    principle: any,
}

export const Category = ({principle}: CategoryProps) => <div className="category">
    <h2>{principle.Title}</h2>
    <p>{principle.Description}</p>
    <ul>
        {principle.answers.map((answer: any, index: any) => <li key={index}>{answer.Title}</li>)}
    </ul>
</div>