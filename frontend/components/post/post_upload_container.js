import { connect } from 'react-redux';
import { createPost } from '../../actions/post_actions';
import PostUpload from './post_upload';

const mapStateToProps = (props) => ({
  currentUser: props.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  createPost: post => dispatch(createPost(post))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostUpload);
