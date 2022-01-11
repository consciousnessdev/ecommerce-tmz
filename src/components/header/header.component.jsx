import './header.styles.scss';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.util';
import withRouter from '../../hoc/withrouter';

import CartIcon from '../cart-icon/cart-icon.component';

import React from 'react'

const Header = ({ currentUser, router }) => {

    const redirectAfterLogout = () => {
      auth.signOut();
      const { navigate } = router;
      navigate({ pathname: '/signin' });
    }

    return (
      <div className="header">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="options">
          <Link className="option" to="/shop">
            SHOP
          </Link>
          <Link className="option" to="/contact">
            CONTACT
          </Link>
          {currentUser ? (
            <div className="option" onClick={() => redirectAfterLogout()}>
              SIGN OUT
            </div>
          ) : (
            <Link className="option" to="signin">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
      </div>
    );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(withRouter(Header));
