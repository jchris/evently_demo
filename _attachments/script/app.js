$.couch.app(function(app) {
  $("#hello").evently(app.ddoc.evently.hello, app);

  $("#account").evently(app.ddoc.vendor.couchapp.evently.account, app);
});
