import React, { Component } from 'react';
import Header from './components/Header';
import GifList from './components/GifList';

class App extends Component {
  constructor(){
    super();

    this.state = {
      gifs: [
        {
          id: 1,
          url: 'gifs/0.gif'
        },
        {
          id: 2,
          url: 'gifs/1.gif'
        },
        {
          id: 3,
          url: 'gifs/2.gif'
        },
        {
          id: 4,
          url: 'gifs/3.gif'
        },
        {
          id: 5,
          url: 'gifs/4.gif'
        },
        {
          id: 6,
          url: 'gifs/5.gif'
        },
        {
          id: 7,
          url: 'gifs/6.gif'
        },
        {
          id: 8,
          url: 'gifs/7.gif'
        },
        {
          id: 9,
          url: 'gifs/8.gif'
        },
        {
          id: 10,
          url: 'gifs/9.gif'
        },
        {
          id: 11,
          url: 'gifs/10.gif'
        },
      ]
    }
  }
  render() {
    return (
      <div>
      <Header />
      <GifList gifs={this.state.gifs}/>
    </div>
    );
  }
}

export default App;
