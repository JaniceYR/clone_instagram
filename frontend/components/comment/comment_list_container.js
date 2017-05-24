import { connect } from "react-redux";

import { deleteComment } from "../../actions/comment_actions";

import CommentList from './comment_list';

const mapDispatchToProps = (dispatch) => ({
  deleteComment: (comment) => dispatch(deleteComment(comment))
});

export default connect (
  null,
  mapDispatchToProps
)(CommentList);
