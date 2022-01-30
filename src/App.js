import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import CollectionPage from './pages/collection/collection.component';

import Header from './components/header/header.component';
import {
  auth,
  createUserProfileDocument,
} from './firebase/firebase.util';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import withRouter from './hoc/withrouter';

// pt169-171
/* import { Card } from './card.component';
import styled from 'styled-components';

import './App.css';

const Text = styled.div`
  color: red;
  font-size: 28px;
  border: ${({ isActive }) =>
    isActive ? '1px solid black' : '3px dotted green'};
`;

function App() {
  return (
    <div className="App">
      <Card>
        <Text isActive={false}>I am a component</Text>
      </Card>
    </div>
  );
} */

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, router, collectionsArray } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      const {
        location: { pathname },
      } = router;
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
          const redirectPathname = pathname === '/signin' ? '/' : pathname;
          this.setState({ isLoading: false }, () =>
            router.navigate(redirectPathname)
          );
        });
      } else {
        this.setState({ isLoading: false }, () => router.navigate(pathname));
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { isLoading } = this.state;
    if (isLoading) {
      return <span>Loading</span>;
    }

    return (
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="shop">
            <Route index={true} element={<ShopPage />} />
            <Route path=":collectionId" element={<CollectionPage />} />
          </Route>
          <Route exact path="/checkout" element={<CheckoutPage />} />
          <Route path="/signin" element={<SignInAndSignUpPage />} />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
