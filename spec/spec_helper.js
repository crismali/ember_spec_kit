expect = chai.expect;

Ember.$(function() {
  mocha.run();
});

var App = Ember.Application.create({
  rootElement: "#ember-app"
});

App.Router.map(function() {
  this.route("foo");
});

App.ApplicationRoute = Ember.Route.extend({});

App.Foo = DS.Model.extend({
  bar: DS.attr("string"),
  baz: DS.attr("string")
});

App.FooRoute = Ember.Route.extend({
  model: function() {
    return this.get("store").createRecord("foo", { bar: "howdy", baz: "zoom" });
  }
});

App.FooController = Ember.Controller.extend({});

function run(func) {
  return function() {
    Ember.run(func);
  };
}

function store() {
  return lookup("store:main");
}

function createModel(name, attributes) {
  return Ember.run(function() {
    return store().createRecord(name, attributes);
  });
}

function getRoute(name) {
  return lookup("route:" + name);
}

function getController(name) {
  return lookup("controller:" + name);
}

function lookup(searchString) {
  return Ember.run(function() {
    return App.__container__.lookup(searchString);
  });
}

App.setupForTesting();
App.injectTestHelpers();

beforeEach(function() {
  App.reset();
});
