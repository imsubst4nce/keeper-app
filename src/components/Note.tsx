import React from 'react';

interface noteTypes {
    title: string;
    content: string;
}

function createNote({title,content}:noteTypes)   {
    return (
        <div className='note'>
            <h1>
                {title}
            </h1>
            <p>
                {content}
            </p>
        </div>
    )
}

export default function Note({title,content}:noteTypes)    {
    
    return (
        createNote({title,content})
    );
}