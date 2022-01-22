import './collection.styles.scss';
import withRouter from '../../hoc/withrouter';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';

const CollectionPage = ({ collection }) => {
  console.log(collection);
  return (
    <div className="collection-page">
      <h2>CATEGORY PAGE</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.router.params.collectionId)(state),
});

export default withRouter(connect(mapStateToProps)(CollectionPage));
