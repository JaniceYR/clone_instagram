import { connect } from 'react-redux';
import { createPost } from '../../actions/post_actions';
import PostItem from './post_item';


const mapStateToProps = ({ session }) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostItem);
