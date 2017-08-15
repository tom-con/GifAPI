import React, { Component } from 'react';
import Controls from './components/Controls';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="header clearfix">
          <h3 className="text-center">
            <span className="head-first head-large">gif</span>
            <span className="head-second head-large">SPLOSION</span>
          </h3>
        </header>
        <Controls />
      </div>
    );
  }
}

export default App;
