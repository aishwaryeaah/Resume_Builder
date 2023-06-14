import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPen, faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';
import './Section.css';

const Section = ({ section, index, onSectionMove, onSectionNameChange, onSectionToggle }) => {
  const [isActive, setIsActive] = useState(section.enabled);
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(section.name);
  const [isBeingDragged, setIsBeingDragged] = useState(false);

  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', index);
    setIsBeingDragged(true);
  };

  const handleDragEnd = () => {
    setIsBeingDragged(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const dragIndex = parseInt(e.dataTransfer.getData('text/plain'), 10);
    const dropIndex = index;
    onSectionMove(dragIndex, dropIndex);
  };

  const handleSectionNameEdit = () => {
    if (isEditing) {
      handleSaveName();
    } else {
      setIsEditing(true);
      setIsActive(true);
      const sections = document.querySelectorAll('.section');
      sections.forEach((sec) => {
        if (!sec.classList.contains('editing')) {
          sec.classList.add('inactive');
        }
      });
    }
  };
  

  const handleInputChange = (e) => {
    setNewName(e.target.value);
  };

  const handleSaveName = () => {
    if (newName.trim() !== '') {
      onSectionNameChange(section.id, newName);
      setIsEditing(false);
      const sections = document.querySelectorAll('.section');
      sections.forEach((sec) => {
        sec.classList.remove('inactive');
      });
    }
  };
  

  const handleSectionToggle = () => {
    setIsActive(!isActive);
    onSectionToggle(section.id);
  };

  const sectionClassName = `section ${isActive ? 'active' : ''} ${isBeingDragged ? 'dragging' : ''} ${isEditing ? 'editing' : ''}`;

  return (
    <div
      className={sectionClassName}
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onDragEnd={handleDragEnd}
    >
      <button className="drag-button">
        <FontAwesomeIcon icon={faBars} />
      </button>
      {isEditing ? (
        <input
          type="text"
          value={newName}
          onChange={handleInputChange}
          autoFocus
        />
      ) : (
        <div className="section-name">{section.name}</div>
      )}
      <button className="edit-button" onClick={handleSectionNameEdit}>
        {isEditing ? 'Save' : <FontAwesomeIcon icon={faPen} />}
      </button>
      <button className="toggle-button" onClick={handleSectionToggle}>
        {isActive ? (
          <FontAwesomeIcon icon={faToggleOn} />
        ) : (
          <FontAwesomeIcon icon={faToggleOff} />
        )}
      </button>
    </div>
  );
};

export default Section;
