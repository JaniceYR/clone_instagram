import { connect } from "react-redux";
import { createLike, deleteLike } from "../../actions/like_actions";
import Like from './like';

const mapStateToProps = (state, ownProps) => {
  return {
    userId: state.session.currentUser.id,
    post: state.post
  };
};

const mapDispatchToProps = (dispatch) => ({
  createLike: (currentUserId, postId) => dispatch(createLike(currentUserId, postId)),
  deleteLike: (currentUserId, postId) => dispatch(deleteLike(currentUserId, postId))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Like);
