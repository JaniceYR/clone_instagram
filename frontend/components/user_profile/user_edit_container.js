import { connect } from 'react-redux';

import { fetchUser, updateUser } from '../../actions/user_actions';
import UserEdit from './user_edit';

const mapStateToProps = (state, ownProps) => ({
  user: state.user
});


const mapDispatchToProps = (dispatch) => ({
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    updateUser: (user) => dispatch(updateUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserEdit);
