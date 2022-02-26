import { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import CollectionComponent from './collection.component';

const CollectionList = ({ fetchCollectionsStartAsync }) => {
  useEffect(() => {
    fetchCollectionsStartAsync();
  }, [fetchCollectionsStartAsync]);

  // return <CollectionPageContainer />;
  return <CollectionComponent />;
};

const mapDispatchTopProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchTopProps)(CollectionList);
