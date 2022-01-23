import { connect } from 'react-redux';
import {Navigate} from 'react-router-dom';

import './homepage.styles.scss';

import { HomePageContainer } from './homepage.styles';

import Directory from '../../components/directory/directory.component';

const Homepage = ({ currentUser }) => {
    if (!currentUser) {
      return <Navigate to="/signin" replace />
    }

    return (
      <HomePageContainer>
        <Directory />
      </HomePageContainer>
    );
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps)(Homepage);
