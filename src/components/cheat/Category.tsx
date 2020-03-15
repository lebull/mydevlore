import React from 'react';
import { Category } from './types/Category';

export const Category = (category: Category) => <div>
    <h2>{category.title}</h2>
    <p>
        {category.stories.map((story, index) => <p>{story}</p>)}
    </p>
</div>