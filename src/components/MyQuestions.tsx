import React, { useEffect, useState } from 'react';
import './MyQuestions.scss';
import { strapi } from '../env';


type MyQuestion = {
    text: string
}
const defaultQuestion: MyQuestion[] = [{
    text: ""
}];

export type AnswerState = {
    loading: false,
    error: false,
    myQuestions: MyQuestion[],
}

export const MyQuestions = () => {

    let [myQuestions, setAnswer] = useState<MyQuestion[]>(defaultQuestion);
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(`${strapi}/my-questions`)
            .then(async response => await response.json())
            .then((response: any) => {
                setLoading(false);
                setAnswer(response);
            })
            .catch(error => {
                setLoading(false);
                setError(error);
            });
    }, []);

    if (loading) {
        return <div className="message"><h3>Loading...</h3></div>
    }

    if (error) {
        return <div className="message"><h3>An error occured.</h3></div>
    }

    return (<div className="myQuestions">
            <ul>
                {myQuestions.map((question:any, index: number) => <li key={index}>{question.text}</li>)}
            </ul>
    </div>)
}

