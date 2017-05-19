import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';

import PostItemContainer from './post_item_container';


class PostItem extends React.Component {
  constructor(props){
    super(props);

  }
  componentDidMount() {
    this.props.fetchPost(this.props.postId);
  }

  render() {
    return(
      <div>
        <h1>PostItem Page</h1>
        {this.props.post.photo_url}
      </div>

    );
  }
}

export default PostItem;
