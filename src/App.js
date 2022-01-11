import { Component } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.util';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    }
  }

  // set default unsubsribe auth to null
  unsubscribeFromAuth = null;

  componentDidMount() {
    // set unsubscribe auth variable from catching auth if changed
    // watching async userAuth from API User (config) auth
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async (userAuth) => {
      // if userAuth exist
      if (userAuth) {
        // then set userRef with create user profile based on user Auth
        const userRef = await createUserProfileDocument(userAuth);

        // when catch snapshot there is changed
        userRef.onSnapshot(snapShot => {
          // set to state
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            }
          });
        })
      } else {
        // set subscribe to current user auth
        // default value of user auth is null
        this.setState({
          currentUser: userAuth,
        });
      }
    });
  }

  componentWillUnmount() {
    // set unsubscribe to null
    // note: return of unsubscireFromAuth is null
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.state;
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
