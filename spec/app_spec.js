describe("App", function() {
  it("has a root element", function() {
    expect(App.rootElement).to.equal("#ember-app");
  });
});

describe("Foo", function() {
  it("can have properties set on it", run(function() {
    var foo = createModel("foo", {});
    foo.set("bar", "hey");
    expect(foo.get("bar")).to.equal("hey");
  }));
});

describe("FooRoute", function() {
  it("has a foo model", function() {
    visit("/foo").then(function() {
      var route = getRoute("foo");
      expect(route.currentModel.get("bar")).to.equal("howdy");
    });
  });
});

