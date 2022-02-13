import './App.css';
import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import DevStories from './Components/DevStories/DevStories';
import EmailNotificationForm from './Components/EmailNotificationForm/EmailNotificationForm';
import HomePageRouting from './Components/HomePageRouting/HomePageRouting';
import RegisterToVote from './Components/RegisterToVote/RegisterToVote';
import ElectionProtection from './Components/ElectionProtection/ElectionProtection';
import VoterIdLaws from './Components/VoterIdLaws/VoterIdLaws';

class App extends Component {
  render = () => {
    return (
      <main className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePageRouting />}/>
          <Route path="/our-story" element={<DevStories />}/>
          <Route path="/register-to-vote" element={<RegisterToVote />}/>
          <Route path="/check-my-registration" element={<RegisterToVote />}/>
          <Route path="/election-protection" element={<ElectionProtection />}/>
          <Route path="/voter-id-laws" element={<VoterIdLaws />}/>
          <Route path="/get-notifications" element={<EmailNotificationForm />}/>
        </Routes>
      </main>
    );
  }
}

export default App;
