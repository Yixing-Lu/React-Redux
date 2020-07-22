import React from "react";

const Rainbow = (WrappedComponent) => {
  const colours = ["red", "pink", "green", "orange"];
  const randomColor = colours[Math.floor(Math.random() * 3)];
  const className = randomColor + "-text";
  return (props) => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Rainbow;
