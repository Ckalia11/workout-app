import React from 'react';
import './tags.css';

export default function Tags(props) {

    return (
        <div className={`tags-list ${props.tags.length > 0 ? 'with-margin' : ''}`}>
            {props.tags.map((tag, index) => (
            <span key={index} className="tag">
                {tag}
                <button type = "button" onClick={() => props.handleTagDelete(tag)}>&times;</button>
            </span>
            ))}
        </div> 
    )
}