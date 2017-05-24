import { connect } from 'react-redux';

import { fetchFeed } from "../../actions/feed_actions";

import Feed from './feed';

const mapStateToProps = (state, ownProps) => {
  return {
    feed: state.feed
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchFeed: (feed) => dispatch(fetchFeed(feed))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
