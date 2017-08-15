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
          url: 'gifs/0.gif',
          tags: ['Jim Carey', 'Computer', 'Programming', 'Joy']
        },
        {
          id: 2,
          url: 'gifs/1.gif',
          tags: ['Ron Swanson', 'Computer', 'Programming', 'Debugging']
        },
        {
          id: 3,
          url: 'gifs/2.gif',
          tags: ['Lasers', 'Cube', 'Polymorphism', 'OOD']
        },
        {
          id: 4,
          url: 'gifs/3.gif',
          tags: ['Computer', 'Turning', 'Pastel']
        },
        {
          id: 5,
          url: 'gifs/4.gif',
          tags: ['Octahedron', 'Ethereum', 'Turning', 'OOD']
        },
        {
          id: 6,
          url: 'gifs/5.gif',
          tags: ['iPhone 8', 'Retrofuturism', 'VCR', 'Cellphone']
        },
        {
          id: 7,
          url: 'gifs/6.gif',
          tags: ['Senior Developer', 'Computer', 'Programming', 'Cat']
        },
        {
          id: 8,
          url: 'gifs/7.gif',
          tags: ['Debugging', 'Computer', 'Test Driven Development']
        },
        {
          id: 9,
          url: 'gifs/8.gif',
          tags: ['OOD', 'Simulated', 'Cube']
        },
        {
          id: 10,
          url: 'gifs/9.gif',
          tags: ['Dancing', 'Computer', 'Retrofuturism']
        },
        {
          id: 11,
          url: 'gifs/10.gif',
          tags: ['Explosion', 'Bomb', 'Joy']
        },
      ]
    }
  }
  render() {
    return (
      <div className="clearfix">
        <Header />
        <GifList gifs={this.state.gifs}/>
      </div>
    );
  }
}

export default App;
