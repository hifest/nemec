import React from 'react';

const Button = ({text,variant}) => {
    return (
        <button className={variant}>
            <p>
                {text}
            </p>
        </button>
    );
};

export default Button;
