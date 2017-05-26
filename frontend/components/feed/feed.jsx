import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Navigation from '../navigation/navigation_container';
import FeedSuggestionContainer from './feed_suggestion_container';
import PostFeed from '../post/post_feed';

class Feed extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchFeed();
  }

  render() {
    if (this.props.feed.length === 0) {
      return (
        <div >
          <Navigation />
          <FeedSuggestionContainer />
        </div>
      );
    } else {
      return(
        <div >
          <Navigation />
          <ul className="feed-page-ul">
            {
              this.props.feed ? this.props.feed.map((post) =>
                <li key={`feed-post-${post.id}`} className="feed-page-li">
                  <PostFeed post={post} />
                </li>
              )
              : ""
            }
          </ul>
        </div>
      );
    }
  }
}

export default Feed;
