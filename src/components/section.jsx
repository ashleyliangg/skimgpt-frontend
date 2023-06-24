// import React, { useState, useEffect } from 'react';
import React from 'react';
import { Remarkable } from 'remarkable';

function section(props) {
  // eslint-disable-next-line prefer-const
  let { title, overview } = props.section;
  overview = overview ? overview.replace(/(Overview:|Highlights:)\s*/, '') : '';

  const md = new Remarkable();

  return (
    <div id="section-container">
      {/* <p className="subtitle" dangerouslySetInnerHTML={{ __html: md.render(title) }} /> */}
      <p className="title">{title}</p>
      <p dangerouslySetInnerHTML={{ __html: md.render(overview) }} />
      {/* <p dangerouslySetInnerHTML={{ __html: md.render(content) }} /> */}
    </div>
  );
}
export default section;
