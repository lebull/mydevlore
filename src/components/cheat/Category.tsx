import React from 'react';
import { CategoryProps } from './types/CategoryProps';
import './Category.css';

export const Category = ({title, stories}: CategoryProps) => <div className="category">
    <h2>{title}</h2>
    <ul>
        {stories.map((story, index) => <li>{story}</li>)}
    </ul>
</div>