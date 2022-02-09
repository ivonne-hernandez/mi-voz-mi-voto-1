import './App.css';
import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import MainContainer from './Components/MainContainer/MainContainer';
import HomePageRoutingComponent from './Components/HomePageRoutingComponent/HomePageRoutingComponent';
import RegisterToVote from './Components/RegisterToVote/RegisterToVote';

class App extends Component {
  render = () => {
    return (
      <main className="App">
        <Header />
        <Routes>
          <Route path="/get-notifications" element={<MainContainer />}/>
          <Route path="/register-to-vote" element={<RegisterToVote />}/>
          <Route path="/" element={<HomePageRoutingComponent />}/>
        </Routes>
      </main>

    );
  }
}

export default App;
