import React from 'react';
import { Routes, Route } from 'react-router-dom';


import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase-utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      
      console.log(user);
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route path='/*' element={<HomePage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/signin' element={<SignInAndSignUpPage />} />
        </Routes>
      </div>
    );
  }
}


export default App;
//<Route path="/hats" component={HatsPage}/>
//<Route exact path="/" component={HomePage} />
//<HomePage />