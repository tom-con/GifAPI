import React, {Component} from 'react';
import Controls from './Controls';

class Header extends Component {
  render() {
    return (
      <div className="container">
        <header className="header">
          <h3 className="text-center">
            <span className="head-first head-large">gif</span>
            <span className="head-second head-large">SPLOSION</span>
          </h3>
        </header>
        <Controls/>
      </div>
    );
  }
}

export default Header;
