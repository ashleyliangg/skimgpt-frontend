import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import CloseIcon from '@mui/icons-material/Close';
import SideBar from './components/sidebar';
import Reader from './components/reader';
import './style.scss';

// App component
function App() {
  const [html, setHtml] = useState(null);
  const [open, setOpen] = useState(false);

  const addHtml = (input) => {
    setHtml(input);
  };

  // closing button
  const handleClose = (event) => {
    setOpen(true);
    if (open) {
      const readernav = document.getElementsByClassName('reader-nav')[0];
      const sidebar = document.getElementsByClassName('app-container')[0];
      const icon = document.getElementsByClassName('closeicon')[0];

      readernav.style.display = 'none';
      sidebar.style.display = 'none';
      icon.style.display = 'none';
    }
  };

  useEffect(() => {
    if (html) {
      setHtml(html);
    }
  }, [html, open]);

  return (
    <div className="all">
      <CloseIcon className="closeicon" onClick={handleClose} />
      <SideBar className="app-container" addHtml={addHtml} />
      <Reader className="reader-container" html={html} />
    </div>
  );
}

// Get a reference to the body element
// Create a new container div
const body = document.getElementsByTagName('body')[0];
const mainContainer = document.createElement('div');
mainContainer.className = 'main-container';
mainContainer.style.width = '75vw';

// Move all the existing content into the container
while (body.firstChild) {
  mainContainer.appendChild(body.firstChild);
}

ReactDOM.render(<App />, body);

const all = document.getElementsByClassName('reader-content')[0];
all.appendChild(mainContainer);
