import { connect } from "react-redux";

import { fetchPost } from '../../actions/post_actions';
import { fetchUser } from '../../actions/user_actions';

import PostItem from './post_item';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  user: state.user
});

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchPost: postId => dispatch(fetchPost(postId)),
    fetchUser: (userId) => dispatch(fetchUser(userId))
  });

};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(PostItem);
