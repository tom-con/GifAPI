import React, { Component } from 'react';

const Gif = (gif) => {
  return (
    <div className="gif-entry">
      <img src={gif.gif.url} />
    </div>
  );
}

export default Gif;
