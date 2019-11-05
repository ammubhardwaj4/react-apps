import React, {Component} from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas: [
      { name: 'Ryu', age: 25, belt: 'black', id: 1},
      { name: 'Yoshi', age: 22, belt: 'green', id: 2},
      { name: 'Crystel', age: 20, belt: 'pink', id: 3}
    ]
  }
  render() {
    return (
      <div className="App">
      <h1> My First React App.</h1>
      <p> Welcome :) </p>
      <Ninjas ninjas={ this.state.ninjas } />
      <p> Please Add The Ninja :-)</p>
      <AddNinja />
      </div>
    );
  }
}

export default App;
