import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';

import PostItemContainer from './post_item_container';


class PostItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: null,
      photo_url: ""
    };
  }
  componentDidMount() {
    this.props.fetchPost(this.props.postId);
  }

  render() {
    return(
      <div>
        <h1>PostItem Page</h1>
        <img src={this.props.post.photo_url} className="post_item_img"/>
      </div>

    );
  }
}

export default PostItem;
