import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import './directory.styles.scss';

import MenuItem from '../menu-item/menu-item.component';
import { selectDirectorySections } from '../../redux/directory/directory.selector'; 

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map((sectionObj) => (
        <MenuItem key={sectionObj.id} {...sectionObj} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
