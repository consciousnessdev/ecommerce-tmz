import { useEffect } from 'react';
import { connect } from 'react-redux';

import CollectionOverView from '../../components/collections-overview/collections-overview.component';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

const ShopPage = ({ fetchCollectionsStartAsync }) => {
  useEffect(() => {
    fetchCollectionsStartAsync();
  }, [fetchCollectionsStartAsync]);

  return (
    <div className="shop-page">
      <CollectionOverView />
    </div>
  );
};

const mapDispatchTopProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchTopProps)(ShopPage);
