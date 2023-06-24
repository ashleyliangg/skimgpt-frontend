import React from 'react';

function section(props) {
  if (props !== undefined) {
    const { title, numSections, overview } = props.generalInfo;

    // Check if title and overview are not undefined before calling replace()
    const cleanedTitle = title ? title.replace(/<title>|<\/title>/g, '') : '';
    const cleanedOverview = overview ? overview.replace(/Title:/, '') : '';

    return (
      <div>
        <h3 className="summary-h3">{cleanedTitle}</h3>
        <p>{numSections}</p>
        <p className="summary-overview">{cleanedOverview}</p>
      </div>
    );
  } else {
    return null;
  }
}
export default section;
