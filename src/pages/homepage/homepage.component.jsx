import './homepage.styles.scss';

import { HomePageContainer } from './homepage.styles';

import Directory from '../../components/directory/directory.component';

const Homepage = () => {
  // this will throw error & error message will show
  // throw Error;
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default Homepage;
