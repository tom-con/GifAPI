import React, { Component } from 'react';

class Controls extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm: ''
    }
  }

  onInputChange(searchTerm) {
    this.setState({searchTerm})
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="well">
            <div className="row">
              <div className="col-sm-12">
                <div className="btn-group btn-group-justified">
                  <a onClick={() => this.props.controlHandler("best")} className="btn btn-default">
                    <span className="glyphicon glyphicon-thumbs-up"></span>&nbsp;
                    Best
                  </a>
                  <a onClick={() => this.props.controlHandler("all")} className="btn btn-default">
                    <span className="glyphicon glyphicon-fire"></span>&nbsp;
                    Trending
                  </a>
                  <a onClick={() => this.props.controlHandler("random")} className="btn btn-primary">
                    <span className="glyphicon glyphicon-random"></span>&nbsp;
                    Random
                  </a>
                </div>
                <label>Search: <input className="form-control" type="text" onChange={event => this.onInputChange(event.target.value)}/></label><a onClick={() => this.props.controlHandler(this.state.searchTerm)} className="btn btn-default">Go!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Controls;
