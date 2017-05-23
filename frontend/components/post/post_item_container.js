import { connect } from "react-redux";

import { fetchPost } from '../../actions/post_actions';
import { createLike, deleteLike } from '../../actions/like_actions';
// import { createComment, deleteComment } from '../../actions/comment_actions';

import PostItem from './post_item';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  user: state.user,
  postDetail: state.posts
});

const mapDispatchToProps = (dispatch) => {
  return ({
      fetchPost: postId => dispatch(fetchPost(postId))
    // createLike: (postId) => dispatch(createLike(postId)),
    // deleteLike: (postId) => dispatch(deleteLike(postId))
    // createComment: (postId, body) => dispatch(createComment(postId, body)),
    // deleteComment: id => dispatch(deleteComment(id))
  });

};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(PostItem);
