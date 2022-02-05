import './App.css';
import { Component } from 'react';
import Header from './Components/Header/Header';
import MainContainer from './Components/MainContainer/MainContainer';

class App extends Component {
  constructor() {
    super();
  }

  postNewEmailSubscriber = (newEmailSubscriber) => {
    //apiCalls POST function here with(newEmailSubscriber) passed in
    //.then(data => if response is okay then show the user that their email is now subscribed)
  }
  
  render = () => {
    <div className="App">
      <Header />
      <MainContainer postNewEmailSubscriber={this.postNewEmailSubscriber}/>
    </div>
  };
}

export default App;
