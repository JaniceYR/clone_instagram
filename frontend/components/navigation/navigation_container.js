import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import Navigation from './navigation';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.session.currentUser,
    user: state.user
});


const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
