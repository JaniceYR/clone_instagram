import { connect } from "react-redux";

import { deleteComment } from "../../actions/comment_actions";

import CommentList from './comment_list';


const mapStateToProps = (state, ownProps) => {
  return {
    currentUserId: state.session.currentUser.id
  };
};


const mapDispatchToProps = (dispatch) => ({
  deleteComment: (commentId) => dispatch(deleteComment(commentId))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(CommentList);
