import React, { useState } from 'react';
import Toggle from 'react-toggle';

export default function reader(props) {
  const [mode, setMode] = useState(false);
  const [modeTransition, setModeTransition] = useState(false);
  const modeChange = (event) => {
    setModeTransition(true);
    setTimeout(() => {
      setMode(event.target.checked);
      setModeTransition(false);
    }, 300);
  };

  return (
    <div className={`reader-container ${modeTransition ? 'mode-transition' : ''}`}>
      <div className="reader-nav">
        <span className="toggle-des">Reader Mode</span>
        <Toggle
          id="cheese-status"
          defaultChecked={mode}
          onChange={modeChange}
        />
      </div>
      <div
        className={`reader-content ${mode ? 'hidden' : ''}`}
      />
      {mode && (
        <div className={`content-wrapper ${mode ? 'show' : ''}`}>
          <div className="content" dangerouslySetInnerHTML={{ __html: props.html }} />
        </div>
      )}
    </div>
  );
}
