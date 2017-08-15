import React, {Component} from 'react';
import Controls from './Controls';
import Gif from './Gif';

class GifList extends Component {
  constructor(props){
    super(props);
    this.state = {
      gifs: props.gifs.map((gif) => {
        return <Gif key={gif.id} gif={gif}/>;
      }),
      displayGifs: props.gifs.map((gif) => {
        return <Gif key={gif.id} gif={gif}/>;
      })
    }
  }

  controlHandler(selection) {
    if(selection === 1){
      this.setState({displayGifs: this.state.gifs})
    } else if(selection === 0){
      this.setState({displayGifs: this.state.gifs[Math.floor(Math.random() * this.state.gifs.length)]})
    }
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
