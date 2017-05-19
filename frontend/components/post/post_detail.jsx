import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';

import PostDetailContainer from './post_detail_container';


class PostDetail extends React.Component {
  constructor(props){
    super(props);

  }
  componentDidMount() {
  }

  render() {
    return(
      <div>
        <h1>PostDetail Page</h1>
      </div>

    );
  }
}

export default PostDetail;
