import { connect } from 'react-redux';
import { createPost } from '../../actions/post_actions';
import PostDetail from './post_detail';


const mapStateToProps = (state, props ) => {
  return {
    props: props
  };
};

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail);
