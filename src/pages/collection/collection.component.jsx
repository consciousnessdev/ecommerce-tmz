import './collection.styles.scss';
import withRouter from '../../hoc/withrouter';

const CollectionPage = ({ router }) => {
  console.log(router.params.collectionId);
  return <div className='collection-page'>
      <h2>CATEGORY PAGE</h2>
  </div>;
};

export default withRouter(CollectionPage);
