import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class PostItem extends React.Component {
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
