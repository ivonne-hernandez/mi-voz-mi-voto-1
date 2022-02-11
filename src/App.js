import './App.css';
import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import MainContainer from './Components/MainContainer/MainContainer';
import DevStories from './Components/DevStories/DevStories';

class App extends Component {
  render = () => {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/about" element={<DevStories />} />
        </Routes>
      </div>
    );
  }
}

export default App;
