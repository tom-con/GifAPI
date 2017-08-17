import React, {Component} from 'react';

class Gif extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: 'loader',
      hidden: 'hidden-gif'
    }
  }

  handleImageLoaded() {
    this.setState({loader: '', hidden: ''})
  }

  render() {
    return (
      <div className="gif-entry">
        <div className={this.state.loader}></div>
        <img className={this.state.hidden} src={this.props.gif.url} onLoad={this.handleImageLoaded.bind(this)}/>
      </div>
    );
  }
}

export default Gif;
