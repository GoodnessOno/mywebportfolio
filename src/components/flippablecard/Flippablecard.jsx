import React, { useState } from 'react';
import './flippablecard.css';

const Flippablecard = ({ frontContent, backContent }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleCardClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="card-container" onClick={handleCardClick}>
            <div className={`card ${isFlipped ? 'is-flipped' : ''}`}>
                <div className="card-front">
                    {frontContent}
                </div>
                <div className="card-back">
                    {backContent}
                </div>
            </div>
        </div>
    );
};

export default Flippablecard;

