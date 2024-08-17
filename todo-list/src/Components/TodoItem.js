import React, { useState } from 'react';
import './todoitem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function TodoItem() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  const handleDelete = () => {
    // Add delete functionality here
  };

  return (
    <div className={`todoitem ${isChecked ? 'checked' : ''}`}>
      <input
        type="checkbox"
        className="checkbox item"
        onClick={handleCheck}
        checked={isChecked}
        readOnly
      />
      <div className={`desc item ${isChecked ? 'strikethrough' : ''}`}>
        Study
      </div>
      <div className="icon item" onClick={handleDelete}>
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  );
}
