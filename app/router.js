import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('trivia');
  this.route('quiz', function() {
    this.route('playing');
    this.route('result');
  });
});
