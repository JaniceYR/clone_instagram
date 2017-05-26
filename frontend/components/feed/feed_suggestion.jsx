import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import FollowContainer from '../follow/follow_container';

class FeedSuggestion extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div className="feed-page-ul">
        <div className="feed-welcome-frame">
          <figure className="feed-welcome-icon"></figure>
          <h2>Welcome to CloneInstagram!</h2>
          <h3>Follow accounts to see photos in your feed.</h3>
        </div>
        <div className="feed-suggestion-frame">
          <div className="feed-suggestion-text">
            <h2>SUGGESTIONS FOR YOU</h2>
          </div>
          <ul>
            {
              this.props.suggestions.length > 0 ? this.props.suggestions.map((user) => {
                return (
                  <li key={`suggestions-${user.id}`} className="feed-suggestion-li">
                    <div className="feed-suggestion-userinfo-frame">
                      <div>
                        <Link to={`/${user.id}`}>
                          <img src={user.profile_pic_url} className="post-detail-user-info-pic"></img>
                          {user.username}
                        </Link>
                      </div>
                      <FollowContainer user={user}/>
                    </div>
                    <ul className="feed-suggestion-photo-ul">
                      <li>
                        { user.posts[0] ?
                          <img src={user.posts[0].photo_url}></img>
                        : ""}
                      </li>
                      <li>
                        { user.posts[1] ?
                          <img src={user.posts[1].photo_url}></img>
                        : ""}
                      </li>
                      <li>
                        { user.posts[2] ?
                          <img src={user.posts[2].photo_url}></img>
                        : ""}
                      </li>

                    </ul>
                  </li>
                  );
                }
              )
              : ""
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default FeedSuggestion;
