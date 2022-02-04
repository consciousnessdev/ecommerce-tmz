import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
// import CollectionPage from './pages/collection/collection.component';
import CollectionList from './pages/collection/collection-list.component';

import Header from './components/header/header.component';

import ReactHooks from './pages/reacthooks/reacthooks.component';

import { auth, createUserProfileDocument } from './firebase/firebase.util';
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

const App = ({ setCurrentUser, router }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
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
          setIsLoading(false);
          router.navigate(redirectPathname);
        });
      } else {
        setIsLoading(false);
        router.navigate(pathname);
      }
      setCurrentUser(userAuth);
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, [setCurrentUser]);  

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
          <Route path=":collectionId" element={<CollectionList />} />
        </Route>
        <Route exact path="/checkout" element={<CheckoutPage />} />
        <Route path="/signin" element={<SignInAndSignUpPage />} />
        <Route path="/reacthooks" element={<ReactHooks />} />
      </Routes>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
