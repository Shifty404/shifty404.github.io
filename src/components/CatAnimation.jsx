import React from 'react';

const CatAnimation = ({ activeSection }) => {
  // Map sections to states
  const sectionStates = {
    hero: 'playing',
    education: 'studying',
    projects: 'looking',
    research: 'researching',
    contact: 'talking',
  };

  const currentState = sectionStates[activeSection] || 'playing';

  return (
    <div id="cat-container" className={`cat-container ${currentState}`}>
      <div className="cat-wrapper">
        <i className="fas fa-cat cat-1"></i>
        <i className="fas fa-cat cat-2"></i>
        <div className="prop game-controller">
          <i className="fas fa-gamepad"></i>
        </div>
        <div className="prop book">
          <i className="fas fa-book"></i>
        </div>
        <div className="prop microscope">
          <i className="fas fa-microscope"></i>
        </div>
        <div className="prop speech-bubble-1">
          <i className="fas fa-comment-dots"></i>
        </div>
        <div className="prop speech-bubble-2">
          <i className="fas fa-comment-dots"></i>
        </div>
      </div>
    </div>
  );
};

export default CatAnimation;
