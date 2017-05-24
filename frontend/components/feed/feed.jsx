import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Navigation from '../navigation/navigation_container';

class Feed extends React.Component {
  constructor(props){
    super(props);

  }
  componentDidMount() {
    this.props.fetchFeed();
  }
  render() {
    return(
      <div>
        <Navigation />
        instead of pictures, post detail component will be rendered here
        <ul>
          {
            this.props.feed.posts ? this.props.feed.posts.map((post) =>
              <li key={`feed-post-${post.id}`}>
                <img src={post.photo_url}></img>
              </li>
            )
            : ""
          }
        </ul>
      </div>
    );
  }
}

export default Feed;
