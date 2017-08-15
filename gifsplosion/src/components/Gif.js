import React, { Component } from 'react';
import Tags from './Tags';

const Gif = (props) => {
  return (
    <div className="gif-entry">
      <img src={props.gif.url} />
        <Tags tags={props.gif.tags}/>
      <hr/>
    </div>
  );
}

export default Gif;
