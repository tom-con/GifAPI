import React, { Component } from 'react';

/*
Tags could be implemented if the Giphy API key was upgraded to a production-level app, however at Beta access Tags are not provided in Gif meta data. For future implementation.
*/

const Tags = (props) => {
  const tagList = props.tags.map((tagWord) => {
    return (
        <div key={tagWord} className="chip">
          {tagWord}
          <span className="gobtn">
            <span className="glyphicon glyphicon-chevron-right"></span>
          </span>
        </div>
    );
  })
  return (
    <div>Tags: {tagList}</div>
  );
}

export default Tags;
