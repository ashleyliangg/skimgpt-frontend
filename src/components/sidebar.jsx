/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Tools from './tools';

let currentUrl, encodedURL;

// helper function for getting current url
function getURL() {
  currentUrl = window.location.href;
  encodedURL = encodeURIComponent(currentUrl);
}

function Sidebar(props) {
  const [loading, setLoading] = useState('null');
  const [response, setResponse] = useState(null);
  const [parsedHtml, setParsedHtml] = useState(null);
  const [generalInfo, setGeneralInfo] = useState(null);
  const [sections, setSections] = useState(null);

  useEffect(() => {
    if (parsedHtml) {
      props.addHtml(parsedHtml);
    }
  }, [parsedHtml, generalInfo, sections]);

  // get request
  const callGet = () => {
    console.log('get method triggered');
    getURL();
    axios('https://skimgpt-mongo.onrender.com/api/summarizers', {
      params: {
        url: encodedURL,
      },
    }).then((res) => {
      if (res !== null) {
        setParsedHtml(res.data.general.result_html);
        setGeneralInfo(res.data.general);
        setSections(res.data.sections);
        setLoading('done');
      }
    });
  };

  // turn on summarizer
  const submit = () => {
    getURL();
    setLoading('start');
    axios.post('https://skimgpt-mongo.onrender.com/api/summarizers', {
      url: currentUrl,
    }).then((res) => {
      for (let i = 0; i < 50; i += 1) {
        setTimeout(callGet, 2000 * i);
      }
    });
  };

  // display content
  let content = null;

  if (loading === 'null') {
    content = (
      <div id="start_main">
        <h2 className="start_title">Summary Mode<br />Is Currently Turned Off</h2>
        <p className="start_des">This feature allows you to quickly grasp the essence of your data. Enable it to see your data in a simplified and more digestible format.</p>
        <button type="button" className="cta-btn" onClick={submit}>Turn on</button>
      </div>
    );
  } else if (loading === 'done' && generalInfo && sections) {
    console.log('enter done');
    content = <Tools generalInfo={generalInfo} sections={sections} />;
  } else if (loading === 'error') {
    content = (
      <div className="loadingWrapper">
        <p>something wrong with the request</p>
      </div>
    );
  } else {
    console.log('enter else');
    content = (
      <div className="loadingWrapper">
        <p>loading...</p>
      </div>
    );
  }

  return (
    <div className="app-container">
      <div className="header">
        <div>
          Skim<span>GPT</span>
        </div>
      </div>
      <div className="sidebar">
        {content}
      </div>
    </div>
  );
}

export default Sidebar;
