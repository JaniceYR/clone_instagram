import { connect } from 'react-redux';
import { values } from 'lodash';

import { fetchFeed } from "../../actions/feed_actions";

import Feed from './feed';

const mapStateToProps = (state, ownProps) => {
  return {
    feed: values(state.feed)
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchFeed: (feed) => dispatch(fetchFeed(feed))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
