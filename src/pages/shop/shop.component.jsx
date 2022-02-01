import { Component } from 'react';
import { connect } from 'react-redux';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
class ShopPage extends Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    return (
      <div className="shop-page">
        <CollectionsOverviewContainer />
      </div>
    );
  }
}

const mapDispatchTopProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchTopProps)(ShopPage);
