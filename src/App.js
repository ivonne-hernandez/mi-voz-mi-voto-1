import './App.css';
import { Component } from 'react';
import Header from './Components/Header/Header';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount = () => {

  }
  
  render = () => (
      <div className="App">
        <Header />
      </div>
  );
}

export default App;
