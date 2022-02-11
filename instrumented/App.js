import './App.css';
import { Component } from 'react';
import Header from './Components/Header/Header';
import MainContainer from './Components/MainContainer/MainContainer';

class App extends Component {
  render = () => {
    return (
      <div className="App">
        <Header />
        <MainContainer />
      </div>
    );
  }
}

export default App;
