import { connect } from 'react-redux';
import { createPost } from '../../actions/post_actions';
import PostDetail from './post_detail';


const mapStateToProps = (state, { user, post} ) => {
  return {
    user: user,
    post: post
  };
};

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail);
