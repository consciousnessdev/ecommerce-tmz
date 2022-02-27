import { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { GlobalStyle } from './global.styles';

import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

import { auth, createUserProfileDocument } from './firebase/firebase.util';
import { setCurrentUser } from './redux/user/user.actions';
// import { selectCurrentUser } from './redux/user/user.selectors';
import withRouter from './hoc/withrouter';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));
const CollectionList = lazy(() => import('./pages/collection/collection-list.component'));

const ReactHooks = lazy(() => import('./pages/reacthooks/reacthooks.component'));
const UseStateExample = lazy(() => import('./pages/reacthooks/UseStateExample'));
const UseEffectExample = lazy(() => import('./pages/reacthooks/UseEffectExample'));
const UseReducerExample = lazy(() => import('./pages/reacthooks/UseReducerExample'));
const AllAboutHooksPage = lazy(() => import('./pages/reacthooks/AllAboutHooks/AllAboutHooks'));
const UseCallBackPage = lazy(() => import('./pages/reacthooks/UseCallback'));

const App = ({ router }) => {
  // const [isLoading, setIsLoading] = useState(true);
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
          // setIsLoading(false);
          router.navigate(redirectPathname);
        });
      } else {
        // setIsLoading(false);
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

  // changed with suspense
  // if (isLoading) {
  //   return <span>Loading</span>;
  // }

  return (
    <div>
      <GlobalStyle />
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
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
              <Route path="all" element={<AllAboutHooksPage />} />
              <Route path="usecallback" element={<UseCallBackPage />} />
            </Route>
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default withRouter(App);
