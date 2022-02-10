import './App.css';
import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import EmailNotificationForm from './Components/EmailNotificationForm/EmailNotificationForm';
import HomePageRouting from './Components/HomePageRouting/HomePageRouting';
import RegisterToVote from './Components/RegisterToVote/RegisterToVote';

class App extends Component {
  render = () => {
    return (
      <main className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePageRouting />}/>
          <Route path="/register-to-vote" element={<RegisterToVote />}/>
          <Route path="/check-my-registration" element={<RegisterToVote />}/>
          <Route path="/get-notifications" element={<EmailNotificationForm />}/>
        </Routes>
      </main>

    );
  }
}

export default App;
