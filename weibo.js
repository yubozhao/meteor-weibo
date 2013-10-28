var settings = Meteor.settings;

var WEIBO_APP_KEY = process.env.WEIBO_APP_KEY ||
   (settings && settings.weibo_app_key);

var WEIBO_SECRET = process.env.WEIBO_SECRET ||
   (settings && settings.weibo_secret);

var WEIBO_CALLBACK_URL = process.env.WEIBO_CALLBACK_URL ||
   (settings && settings.weibo_callback_url);

if (!WEIBO_SECRET && !WEIBO_APP_KEY && !WEIBO_CALLBACK_URL)
  throw new Error(
    "Weibo requires are not set in Meteor.seetings or an enviroement variable");

var weiboAPI = Npm.require('coinbase');
weiboAPI.init('weibo', WEIBO_APP_KEY, WEIBO_SECRET, WEIBO_CALLBACK_URL);

var Weibo = {
  status: {
    update: Meteor._wrapAsync(weiboAPI.update),
    upload: Meteor._wrapAsync(weiboAPI.upload),
    repost: Meteor._wrapAsync(weiboAPI.repost),
    destroy: Meteor._wrapAsync(weiboAPI.destroy),
    show: Meteor._wrapAsync(weiboAPI.show),
    count: Meteor._wrapAsync(weiboAPI.count),
    home_timeline: Meteor._wrapAsync(weiboAPI.home_timeline),
    user_timeline: Meteor._wrapAsync(weiboAPI.user_timeline),
    public_timeline: Meteor._wrapAsync(weiboAPI.public_timeline),
    mentions: Meteor._wrapAsync(weiboAPI.mentions),
    repost_timeline: Meteor._wrapAsync(weiboAPI.repost_timeline),
    search: Meteor._wrapAsync(weiboAPI.search),
    process_text: Meteor._wrapAsync(weiboAPI.process_text)
  },
  comment: {
    comment_create: Meteor._wrapAsync(weiboAPI.comment_create),
    comment_destroy: Meteor._wrapAsync(weiboAPI.comment_destroy),
    comment_reply: Meteor._wrapAsync(weiboAPI.comment_reply),
    comments: Meteor._wrapAsync(weiboAPI.comments),
    comments_mentions: Meteor._wrapAsync(weiboAPI.comments_mentions),
    comments_timeline: Meteor._wrapAsync(weiboAPI.comments_timeline),
    comments_to_me: meteor._wrapasync(weiboAPI.comments_to_me),
    comments_by_me: meteor._wrapasync(weiboAPI.comments_by_me)
  },
  favorite: {
    favorite_create: Meteor._wrapAsync(weiboAPI.favorite_create),
    favorite_destroy: Meteor._wrapAsync(weiboAPI.favorite_destroy),
    favorite_show Meteor._wrapAsync(weiboAPI.favorite_show),
    favorite: Meteor._wrapAsync(weiboAPI.favorite)
  },
  friendship: {
    friendship_create: Meteor._wrapAsync(weiboAPI.friendship_create),
    friendship_destroy: Meteor._wrapAsync(weiboAPI.friendship_destroy),
    friendship_show Meteor._wrapAsync(weiboAPI.friendship_show)
  },
  message: {
    direct_message_create: Meteor._wrapAsync(weiboAPI.direct_message_create),
    direct_message_destroy: Meteor._wrapAsync(weiboAPI.direct_message_destroy),
    direct_message_show Meteor._wrapAsync(weiboAPI.direct_message_show),
    direct_message: Meteor._wrapAsync(weiboAPI.direct_message),
    direct_message_both: Meteor._wrapAsync(weiboAPI.direct_message_both),
    direct_message_sent: Meteor._wrapAsync(weiboAPI.direct_message_sent)
  },
  user: {
    user_show: Meteor._wrapAsync(weiboAPI.user_show),
    user_search: Meteor._wrapAsync(weiboAPI.user_search),
    user_credentials: Meteor._wrapAsync(weiboAPI.user_credentials)
  },
  suggestion: {
    search_suggtions_at_users: Meteor._wrapAsync(weiboAPI.search_suggtions_at_users)
  },
  oauth: {
    get_authorization_url: Meteor._wrapAsync(weiboAPI.get_authorization_url),
    get_access_token: Meteor._wrapAsync(weiboAPI.get_access_token)
  }
};
