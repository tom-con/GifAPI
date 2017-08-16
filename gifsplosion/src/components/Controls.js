import React, { Component } from 'react';

class Controls extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="well">
            <div className="row">
              <div className="col-sm-12">
                <div className="btn-group btn-group-justified">
                  <a href="#" onClick={() => this.props.controlHandler(1)} className="btn btn-default">
                    <span className="glyphicon glyphicon-list"></span>&nbsp;
                    See All
                  </a>
                  <a href="#" onClick={() => this.props.controlHandler(0)} className="btn btn-primary">
                    <span className="glyphicon glyphicon-random"></span>&nbsp;
                    Random
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Controls;