import { Component } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth } from './firebase/firebase.util';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    }
  }
  // declaration of unsubscribe
  unsubscribeFromAuth = null;

  componentDidMount() {
    /**
     * auth.onAuthStateChanged is subscription will check logged account
     * every did mount it still logged in until logged out,
     * even after refresh
     */
    // set subscribing
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    // unsubscribe
    this.unsubscribeFromAuth();
  }
  


  

  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<SignInAndSignUpPage />} />
        </Routes>
      </div>
    );
  };
}

export default App;
