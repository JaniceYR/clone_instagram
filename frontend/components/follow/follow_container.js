import { connect } from "react-redux";
import { createFollow, deleteFollow } from "../../actions/follow_actions";

import Follow from './follow';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => ({
  createFollow: (followerId, followingId) => dispatch(createFollow(followerId, followingId)),
  deleteFollow: (followerId, followingId) => dispatch(deleteFollow(followerId, followingId))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Follow);
