import { Profiler } from 'react';

import './homepage.styles.scss';

import { HomePageContainer } from './homepage.styles';

import Directory from '../../components/directory/directory.component';

const Homepage = () => {
  // this will throw error & error message will show
  // throw Error;
  return (
    <HomePageContainer>
      {/* Profiler will check id, phase & actualDuration */}
      {/* Documentation: https://reactjs.org/docs/profiler.html#onrender-callback */}
      <Profiler
        id="Directory"
        onRender={(id, phase, actualDuration) => {
          console.log({
            id,
            phase,
            actualDuration,
          });
        }}
      >
        <Directory />
      </Profiler>
    </HomePageContainer>
  );
};

export default Homepage;
