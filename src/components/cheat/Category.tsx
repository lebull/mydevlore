import React from 'react';
import './Category.scss';
import {Link} from "react-router-dom";

export type CategoryProps = {
    principle: any,
}

export const Category = ({principle}: CategoryProps) => <div className="category">
    <h2>{principle.Title}</h2>
    <p>{principle.Description}</p>
    <div className="storyContainer">
        {principle.answers.map((answer: any, index: any) => {
            return <Link key={index} to={`/answers/${answer.id}`} className="story">{answer.Title}</Link>
        })}
    </div>
</div>