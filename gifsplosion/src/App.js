import React, { Component } from 'react';
import Header from './components/Header';
import GifList from './components/GifList';

class App extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div className="clearfix">
        <Header />
        <GifList />
      </div>
    );
  }
}

export default App;
