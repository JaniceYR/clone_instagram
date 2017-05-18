import { connect } from 'react-redux';
import { createPhoto } from '../../actions/photo_actions';
import PostForm from './post_form';

const mapStateToProps = (props) => {
    return( {currentUser: props.session.currentUser });
};

const mapDispatchToProps = (dispatch) => ({
  createPhoto: photo => dispatch(createPhoto(photo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);
