import React from 'react';

const Text = ({title,subtitle,addClasToContainer,titleSecond}) => {
    // в рот я шатав назвати правильно класи,розбирайся сам
    return (
            <div className={`text ${addClasToContainer}`}>
                <p className="text_subtitle">
                    {title}
                    <span>{titleSecond}</span>
                </p>
                <p className="text_title" dangerouslySetInnerHTML={{ __html: subtitle }}></p>
            </div>
    );
};

export default Text;
