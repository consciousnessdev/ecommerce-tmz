import { Component } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
class ShopPage extends Component {

  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { isCollectionFetching } = this.props;
    return (
      <div className="shop-page">
        <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} />
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

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
});

const mapDispatchTopProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchTopProps)(ShopPage);
