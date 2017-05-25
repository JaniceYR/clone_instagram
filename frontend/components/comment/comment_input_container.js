import { connect } from "react-redux";

import { createComment } from "../../actions/comment_actions";

import CommentInput from './comment_input';

const mapStateToProps = (state, ownProps) => {
  return {
    userId: state.session.currentUser.id
  };
};

const mapDispatchToProps = (dispatch) => ({
  createComment: (comment) => dispatch(createComment(comment))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(CommentInput);
