import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import FollowContainer from '../follow/follow_container';

class FeedSuggestion extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <div>
        <div>
          <h3>Welcome to Clonestagram!</h3>
          <h3>Follow accounts to see photos in your feed.</h3>
        </div>
        <div>
          <div>
            SUGGESTIONS FOR YOU
          </div>
          <ul>
            {
              this.props.suggestions.map((user) => (
                <li>
                  <img src={user.profile_pic_url}></img>
                  {user.username}
                  <FollowContainer user={user}/>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default FeedSuggestion;
