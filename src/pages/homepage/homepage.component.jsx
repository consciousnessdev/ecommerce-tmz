import { connect } from 'react-redux';
import {Navigate} from 'react-router-dom';

import './homepage.styles.scss';

import Directory from '../../components/directory/directory.component';

const Homepage = ({ currentUser }) => {
    if (!currentUser) {
      return <Navigate to="/signin" replace />
    }

    return (
      <div className="homepage">
        <Directory />
      </div>
    );
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps)(Homepage);
