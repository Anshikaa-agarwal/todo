import React, { useState } from 'react';
import './todoitem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faSave } from '@fortawesome/free-solid-svg-icons';

export default function TodoItem(props) {
  const [isChecked, setIsChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(props.description);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    props.onEdit(newDescription);
    setIsEditing(false);
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

      {isEditing ? (
        <input
          type="text"
          className="edit-input item"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
      ) : (
        <div className={`desc item ${isChecked ? 'strikethrough' : ''}`}>
          {props.description}
        </div>
      )}

      {isEditing ? (
        <div className="icon item" onClick={handleSaveClick}>
          <FontAwesomeIcon icon={faSave} />
        </div>
      ) : (
        <>
          <div className="icon item" onClick={handleEditClick}>
            <FontAwesomeIcon icon={faEdit} />
          </div>
          <div className="icon item" onClick={props.onDelete}>
            <FontAwesomeIcon icon={faTrash} />
          </div>
        </>
      )}
    </div>
  );
}
