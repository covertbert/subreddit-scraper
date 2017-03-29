import redditOauthConfig from '../../.env';

const SnooWrap = require('snoowrap');

const Reddit = new SnooWrap(redditOauthConfig);

export default Reddit;
