import React from "react";

const WhiteBtn = ({ text, className, icon: Icon, iconClassName }) => {
  return (
    <>
      <button className={className}>
        {text} {Icon && <Icon className={iconClassName} />}
      </button>
    </>
  );
};

export default WhiteBtn;
