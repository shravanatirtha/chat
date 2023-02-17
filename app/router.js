import EmberRouter from '@ember/routing/router';
import config from 'chat/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('chats', function () {
    this.route('chat', { path: 'chat/:id' });
  });
  this.route('not-found', { path: '/*path' });
  this.route('login');
  this.route('register');
  this.route('profile');
});
