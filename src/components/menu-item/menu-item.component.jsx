import withRouter from '../../hoc/withrouter';
import './menu-item.styles.scss';

const MenuItem = ({ linkUrl, title, imageUrl, size, router }) => {
  const { location: {pathname}, navigate: history } = router;
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history(`${pathname}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOPNOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
