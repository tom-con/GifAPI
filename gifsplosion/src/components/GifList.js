import React, { Component } from 'react';
import Gif from './Gif';

const GifList = (props) => {
  const gifs = props.gifs.map((gif) => {
    return <Gif key={gif.id} gif={gif}/>;
  })
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          {gifs}
        </div>
      </div>
    </div>
  );
}

export default GifList;
