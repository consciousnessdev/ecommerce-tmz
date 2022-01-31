import { Component } from 'react';
import { connect } from 'react-redux';
import CollectionComponent from './collection.component';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.util';

import { updateCollections } from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionComponentWithSpinner = WithSpinner(CollectionComponent);

class CollectionList extends Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;
  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        updateCollections(collectionsMap);
        this.setState({
          loading: false,
        });
      }
    );
  }

  render() {
    const { loading } = this.state;
    return <CollectionComponentWithSpinner isLoading={loading} />;
  }
}

const mapDispatchTopProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchTopProps)(CollectionList);
