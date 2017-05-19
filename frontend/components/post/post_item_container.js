import { connect } from 'react-redux';
import { fetchPost } from '../../actions/post_actions';
import PostItem from './post_item';


const mapStateToProps = (state, {postId}) => {
  return {
    postId: postId,
    post: state.posts
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPost: postId => dispatch(fetchPost(postId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostItem);
