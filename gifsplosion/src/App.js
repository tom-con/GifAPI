import React, { Component } from 'react';
import Header from './components/Header';
import GifList from './components/GifList';

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <GifList />
    </div>
    );
  }
}

export default App;
