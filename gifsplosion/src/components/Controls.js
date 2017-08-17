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
              <div className="col-md-12 col-sm-4/">
                <div className="btn-group btn-group-justified">
                  <a onClick={() => this.props.controlHandler("best")} className={this.props.thisPage === "best" ? "btn btn-primary" : "btn btn-default"}>
                    <span className="glyphicon glyphicon-thumbs-up"></span>&nbsp;
                    Best
                  </a>
                  <a onClick={() => this.props.controlHandler("all")} className={this.props.thisPage === "all" ? "btn btn-primary" : "btn btn-default"}>
                    <span className="glyphicon glyphicon-fire"></span>&nbsp;
                    Trending
                  </a>
                  <a onClick={() => this.props.controlHandler("random")} className={this.props.thisPage === "random" ? "btn btn-primary" : "btn btn-default"}>
                    <span className="glyphicon glyphicon-random"></span>&nbsp;
                    Random
                  </a>
                </div>
                <input id="search-bar" className="form-control" type="text" onChange={event => this.onInputChange(event.target.value)}/><button onClick={() => this.props.controlHandler(this.state.searchTerm)} className=" float-right btn btn-default">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Controls;
