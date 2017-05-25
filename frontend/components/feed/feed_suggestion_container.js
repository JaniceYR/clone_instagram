import { connect } from 'react-redux';
import { values } from 'lodash';

import { fetchUsers } from "../../actions/user_actions";

import FeedSuggestion from './feed_suggestion';

const mapStateToProps = (state, ownProps) => {
  return {
    suggestions: state.user.users
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedSuggestion);
