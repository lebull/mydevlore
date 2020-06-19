import React, { useEffect, useState } from 'react';
import './Answer.scss';
import { useParams } from "react-router-dom";


type Answer = {
    Title: string | null,
    Situation: string | null,
    Task: string | null,
    Action: string | null,
    Result: string | null,
    principles: any,
}
const defaultAnswer: Answer = {
    Title: null,
    Situation: null,
    Task: null,
    Action: null,
    Result: null,
    principles: []
};

export type AnswerProps = {
    answer: Answer
}

export type AnswerState = {
    loading: false,
    error: false,
    answer: Answer,
}

export const Answer = () => {

    let { id } = useParams();

    let [answer, setAnswer] = useState<Answer>(defaultAnswer);
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(`http://104.248.119.11/answers/${id}`)
            .then(async response => await response.json())
            .then((response: any) => {
                setLoading(false);
                setAnswer(response);
            })
            .catch(error => {
                setLoading(false);
                setError(error);
            });
    }, [id]);

    if (loading) {
        return <div className="message"><h3>Loading...</h3></div>
    }

    if (error) {
        return <div className="message"><h3>{error}</h3></div>
    }

    return (<div className="answer">
        <h3>{answer.Title}</h3>
        <ul>
            <li>{answer.Situation}</li>
            <li>{answer.Task}</li>
            <li>{answer.Action}</li>
            <li>{answer.Result}</li>
        </ul>
        <div className="principles">
            {answer.principles.map((principle:any) => <span>{principle.Title}</span>)}
        </div>
    </div>)
}

