import React, { Component } from 'react';
// import Tags from './Tags';

const Gif = (props) => {
  return (
    <div className="gif-entry">
      <img src={props.gif.url} />
      <a className="glyphicon glyphicon-thumbs-up" ></a>
        {/* See comment in ./Tags.js for exclusion
          <Tags tags={props.gif.tags}/>
      <hr/>
       */}
    </div>
  );
}

export default Gif;
