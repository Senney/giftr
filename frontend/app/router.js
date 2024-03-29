import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('gifts', {path: '/gifts'});
  this.route('gift', {path: '/gift/:gift_id'});
  this.route('about', {path: 'about'});
});

export default Router;
