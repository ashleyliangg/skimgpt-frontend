import React, { useState } from 'react';
import Dropdown from './dropdown';

function Retone(props) {
  // const [summary, setSummary] = useState({
  //   title: '',
  //   num_sections: '',
  //   overview: '',
  //   result_html: '',
  // });

  // const [section, setSection] = useState({
  //   id: '',
  //   length: '',
  //   title: '',
  //   overview: '',
  //   content: '',
  // });
  const [selected, setSelected] = useState('');

  return (
    <div>
      <div className="dropdown">
        <div className="dropdown-label">Rewrite Tone</div>
        <Dropdown selected={selected} setSelected={setSelected} />
      </div>
      <div id="title">
        CS 10 | Problem solving
        {/* {summary.title} */}
      </div>

      <div>
        <div id="section-title">
          Shortest paths
          {/* {section.title} */}
        </div>
        <div id="section-tone">
          BFS works well to find paths with the minimum number of edges, as in the Kevin Bacon Game.
          However, many times we will have graphs where the edges have weights, e.g., in a map (of the cartographic kind)
          where the edges are roads connecting cities, and we want shortest-total-distance routes. Similarly the weight
          on each road could represent how long it would take to go that way, and we want fastest routes. And of course,
          the graph could represent other connections, e.g., in a network.
          {/* {section.content} */}
        </div>
      </div>

    </div>
  );
}

export default Retone;
