import React, {Component} from 'react';
import Controls from './Controls';
import Gif from './Gif';
import Pager from './Pager';

class GifList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayGifs: null,
      currentPage: 1,
      selection: "all",
      offset: 0,
      pager: ''
    }
  }

  componentDidMount() {
    this.getGifs()
  }

  getGifs() {
    let selection = this.state.selection
    let offset = this.state.offset
    fetch(`/api/gifs/${selection}` + (selection !== 'best' && selection !== 'random'
      ? `/${offset}`
      : '')).then(res => res.json()).then(gifs => {
      this.setState({
        displayGifs: gifs.map((gif) => {
          return <Gif key={gif.id} gif={gif}/>;
        })
      })
    })
  }

  pageChangeHandler(page) {
    this.setState({
      currentPage: page,
      offset: (page * 10) - 10
    }, () => {
      this.getGifs()
    })

  }

  controlHandler(selection) {
    if (selection === "best" || selection === "random") {
      this.setState({pager: "pager-hide"}, () => {
        this.setState({selection: selection,currentPage: 1}, () => {
          this.getGifs()
        })
      })
    } else {
      this.setState({pager: ""}, () => {
        this.setState({selection: selection,currentPage: 1}, () => {
          this.getGifs()
        })
      })
    }
  }

  render() {
    return (
      <div className="container">
        <Controls thisPage={this.state.selection} controlHandler={this.controlHandler.bind(this)}/>
        <div className="row">
          <div className="col-md-12">
            {this.state.displayGifs}
          </div>
        </div>
        <Pager display={this.state.pager} gifs={this.state.displayGifs} page={this.state.currentPage} pageController={this.pageChangeHandler.bind(this)}/>
      </div>
    );
  }
}

export default GifList;
