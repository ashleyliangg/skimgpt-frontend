import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Dropdown({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);
  const options = ['Straightforward', 'Nice', 'Aggressive', 'Controversial'];

  return (
    <div>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {selected}
        <div id="expand-icon">
          <ExpandMoreIcon />
        </div>
      </div>
      {isActive && (
        <div className="dropdown-options">
            {options.map((option) => (
              // eslint-disable-next-line jsx-a11y/no-static-element-interactions
              <div
                onClick={(e) => {
                  setSelected(option);
                  setIsActive(false);
                }}
                className="dropdown-item"
              >
                {option}
              </div>
            ))}
        </div>
      )}
    </div>

  );
}

export default Dropdown;
