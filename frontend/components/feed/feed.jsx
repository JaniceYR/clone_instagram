import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Navigation from '../navigation/navigation_container';

class Feed extends React.Component {
  constructor(props){
    super(props);

  }
  render() {
    return(
      <div>
        <Navigation />
        <h1>feed page</h1>
      </div>
    );
  }
}

export default Feed;
