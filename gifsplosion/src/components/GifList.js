import React, {Component} from 'react';
import Controls from './Controls';
import Gif from './Gif';

class GifList extends Component {
  constructor(props) {
    super(props);
    this.state = {displayGifs: null}
  }

  componentDidMount(){
    this.getGifs("all")
  }

  getGifs(selection) {
    fetch(`/api/gifs/` + (selection === "all"
      ? ''
      : selection)).then(res => res.json()).then(gifs => {
      this.setState({
        displayGifs: gifs.map((gif) => {
          return <Gif key={gif.id} gif={gif}/>;
        })
      })
    })
  }

  controlHandler(selection) {
    this.getGifs(selection)
  }

  render() {
    return (
      <div className="container">
        <Controls controlHandler={this.controlHandler.bind(this)}/>
        <div className="row">
          <div className="col-md-12">
            {this.state.displayGifs}
          </div>
        </div>
      </div>
    );
  }
}

export default GifList;
