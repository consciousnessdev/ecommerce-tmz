import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import CollectionList from './pages/collection/collection-list.component';

import Header from './components/header/header.component';

import ReactHooks from './pages/reacthooks/reacthooks.component';
import UseStateExample from './pages/reacthooks/UseStateExample';
import UseEffectExample from './pages/reacthooks/UseEffectExample';
import UseReducerExample from './pages/reacthooks/UseReducerExample';

import { auth, createUserProfileDocument } from './firebase/firebase.util';
import { setCurrentUser } from './redux/user/user.actions';
// import { selectCurrentUser } from './redux/user/user.selectors';
import withRouter from './hoc/withrouter';

const App = ({ router }) => {
  const [isLoading, setIsLoading] = useState(true);
  // commented caused by passing some previous course video about saga
  // then currentUser variable is unused
  // const currentUser = useSelector(selectCurrentUser);

  // useDispatch make dispatch available inside component
  const dispatch = useDispatch()

  // if you make function like below, it means always create new instance
  // every component has render, so it will makes rerender over and over
  // note: check useEffect array dependecy
  // const func = () => {};

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      const {
        location: { pathname },
      } = router;
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          dispatch(
            setCurrentUser({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            })
          );
          const redirectPathname = pathname === '/signin' ? '/' : pathname;
          setIsLoading(false);
          router.navigate(redirectPathname);
        });
      } else {
        setIsLoading(false);
        router.navigate(pathname);
      }
      dispatch(setCurrentUser(userAuth));
    });
    return () => {
      unsubscribeFromAuth();
    };
    // it will makes rerender over and over, because useEffect
    // watch func it difference instance every it's declaration
    // }, [dispatch, func]);
  }, [dispatch]);

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
        <Route path="/reacthooks">
          <Route index={true} element={<ReactHooks />} />
          <Route path="usestate" element={<UseStateExample />} />
          <Route path="useeffect" element={<UseEffectExample />} />
          <Route path="usereducer" element={<UseReducerExample />} />
        </Route>
      </Routes>
    </div>
  );
};

export default withRouter(App);
