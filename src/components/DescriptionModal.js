import React from 'react';

const DescriptionModal = ({ isOpen, onClose, section }) => {
  return (
    <div className={`description-modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          {/* Render the close icon here */}
        </button>
        <h2 className="modal-title">{section.name} Description</h2>
        <p className="modal-description">{section.description}</p>
      </div>
    </div>
  );
};

export default DescriptionModal;
