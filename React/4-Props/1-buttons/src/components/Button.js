import React from 'react';

const Button = (props) => {
  if (props.bold) {
    return <button><b>{props.content}</b></button>;
  }
    return <button>{props.content}</button>;
}

export default Button;
