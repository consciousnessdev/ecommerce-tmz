import { Component } from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.util';
class ShopPage extends Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async (snapshot) => {
      convertCollectionsSnapshotToMap(snapshot);
    });
  }

  render() {
    return (
      <div className="shop-page">
        <CollectionsOverview />
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

export default ShopPage;
