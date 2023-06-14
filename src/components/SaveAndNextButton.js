import React, { useState } from 'react';
import './SaveAndNextButton.css';

const SaveAndNextButton = ({ onSave }) => {
  const [hasChanges, setHasChanges] = useState(false);

  const handleSave = () => {
    setHasChanges(false);
    onSave();
  };
    
    return (
      <button className="save-and-next-button" onClick={handleSave} disabled={!hasChanges}>
        Save And Next
      </button>
    );
  };
  
  export default SaveAndNextButton;
