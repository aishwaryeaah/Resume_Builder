import React, { useState } from 'react';
import Section from './Section';
import SaveAndNextButton from './SaveAndNextButton';
import './ResumeBuilder.css';

const ResumeBuilder = () => {
  const [sections, setSections] = useState([
    {
      id: 1,
      name: 'Profile Summary',
      description: 'This is the profile summary section.',
      enabled: true
    },
    {
      id: 2,
      name: 'Academic and Cocurricular Achievements',
      description: 'This is the education section.',
      enabled: true
    },
    {
      id: 3,
      name: 'Summer Internship Experience',
      description: 'This is the experience section.',
      enabled: true
    },
    {
      id: 4,
      name: 'Work Experience',
      description: 'This is the skills section.',
      enabled: true
    },
    {
      id: 5,
      name: 'Projects',
      description: 'This is the projects section.',
      enabled: true
    },
    {
      id: 6,
      name: 'Certifications',
      description: 'This is the certifications section.',
      enabled: true
    },
    {
      id: 7,
      name: 'Leadership Positions',
      description: 'This is the languages section.',
      enabled: true
    },
    {
      id: 8,
      name: 'Extracurricular',
      description: 'This is the interests section.',
      enabled: true
    },
    {
      id: 9,
      name: 'Education',
      description: 'This is the references section.',
      enabled: true
    }
  ]);

  
  const handleSectionMove = (dragIndex, dropIndex) => {
    const updatedSections = [...sections];
    const [draggedSection] = updatedSections.splice(dragIndex, 1);
    updatedSections.splice(dropIndex, 0, draggedSection);
    setSections(updatedSections);
  };

  const handleSectionNameChange = (sectionId, newName) => {
    const updatedSections = [...sections];
    const sectionIndex = updatedSections.findIndex((section) => section.id === sectionId);
    if (sectionIndex !== -1) {
      updatedSections[sectionIndex].name = newName;
      setSections(updatedSections);
    }
  };

  const handleSectionToggle = (sectionId) => {
    const updatedSections = [...sections];
    const sectionIndex = updatedSections.findIndex((section) => section.id === sectionId);
    if (sectionIndex !== -1) {
      updatedSections[sectionIndex].enabled = !updatedSections[sectionIndex].enabled;
      setSections(updatedSections);
    }
  };

  const handleSave = () => {
    console.log("Saving changes:", sections);
  };

  return (
    <div className="resume-builder">
      <h1 className="heading">Select Your Sections</h1>
      <div className="sections-container">
        {sections.map((section, index) => (
          <Section
            key={section.id}
            section={section}
            index={index}
            onSectionMove={handleSectionMove}
            onSectionNameChange={handleSectionNameChange}
            onSectionToggle={handleSectionToggle}
          />
        ))}
      </div>
      <SaveAndNextButton onSave={handleSave} />
    </div>
  );
};

export default ResumeBuilder;