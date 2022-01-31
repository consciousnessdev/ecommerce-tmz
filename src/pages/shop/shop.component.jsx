import { Component } from 'react';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

import { updateCollections } from '../../redux/shop/shop.actions';

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.util';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
class ShopPage extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');
    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({
        loading: false,
      });
    });
  }

  render() {
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <CollectionsOverviewWithSpinner isLoading={loading} />
      </div>
    );
  }
}

// const ShopPage = () => {
//   return (
//     <div className="shop-page">
//       <CollectionsOverview />
//     </div>
//   );
// };

const mapDispatchTopProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchTopProps)(ShopPage);
