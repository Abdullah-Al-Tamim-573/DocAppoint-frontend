import React from 'react';

const TealBtn = ({text, className, icon:Icon, iconClassName}) => {
    return (
        <>
            <button className={className}>
                  {text} 
                  {Icon && <Icon className={iconClassName} />}
            </button>
        </>
    );
};

export default TealBtn;