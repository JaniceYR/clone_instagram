import { connect } from 'react-redux';
import { fetchPost } from '../../actions/post_actions';
import PostDetail from './post_detail';


const mapStateToProps = (state, props ) => {
  return {
    postDetail: state.posts,
    props: props
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchPost: postId => dispatch(fetchPost(postId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail);
