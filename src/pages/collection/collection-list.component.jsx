import { Component } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import CollectionComponent from './collection.component';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionComponentWithSpinner = WithSpinner(CollectionComponent);

class CollectionList extends Component {

  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { isCollectionFetching } = this.props;
    return <CollectionComponentWithSpinner isLoading={isCollectionFetching} />;
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
});

const mapDispatchTopProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchTopProps)(CollectionList);
