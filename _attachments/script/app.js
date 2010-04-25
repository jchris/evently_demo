$.couch.app(function(app) {
  $("#hello").evently(app.ddoc.evently.hello, app);

  $("#account").evently(app.ddoc.vendor.couchapp.evently.account, app);

  $("#ajax").evently({
    _init: {
      mustache: '<p>Loading CouchDB Server info.</p>',
      after: function() {
        var widget = $(this);
        $.ajax({
          url : '/',
          complete: function(req) {
            var resp = $.httpData(req, "json");
            widget.trigger("version", [resp]);
          }
        })
      }
    },
    version: {
      mustache: "<p>Running CouchDB version {{version}}</p>",
      data: function(e, resp) {
        return resp;
      }
    }
  });
});
