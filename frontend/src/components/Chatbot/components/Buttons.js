import React from 'react';
import { Button } from 'react-bootstrap';
import { BUTTON_STYLES } from './ChatbotStyles';

function Buttons({ option, handleClick }) {
  return (
    <Button
      className="py-1 px-2 mx-1 mb-2 mt-1"
      style={BUTTON_STYLES}
      name={option}
      onClick={() => {
        handleClick(option);
      }}
    >
      {option}
    </Button>
  );
}

export default Buttons;
