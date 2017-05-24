import * as APIUtil from '../util/feed_api_util';

export const RECEIVE_FEED = "RECEIVE_FEED";

export const receiveFeed = (feed) => ({
  type: RECEIVE_FEED,
  feed
});

export const fetchFeed = () => dispatch => (
  APIUtil.fetchFeed()
    .then(feed => dispatch(receiveFeed(feed)))
);
