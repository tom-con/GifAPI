import React, { Component } from 'react';

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
