import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';

import PostItemContainer from './post_item_container';


class PostItem extends React.Component {
  constructor(props){
    super(props);

  }
  componentDidMount() {
  }

  render() {
    return(
      <div>
        <h1>PostItem Page</h1>
      </div>

    );
  }
}

export default PostItem;
