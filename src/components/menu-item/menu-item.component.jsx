import withRouter from '../../hoc/withrouter';

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from './menu-item.styles';

const MenuItem = ({ linkUrl, title, imageUrl, size, router }) => {
  const { location: {pathname}, navigate: history } = router;
  return (
    <MenuItemContainer
      className={`${size} menu-item`}
      onClick={() => history(`${pathname}${linkUrl}`)}
    >
      <BackgroundImageContainer
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <ContentContainer className="content">
        <ContentTitle className="title">{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle className="subtitle">SHOPNOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
