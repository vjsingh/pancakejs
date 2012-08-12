// Generated by CoffeeScript 1.3.3
(function() {

  require(['app', 'router', 'backbone'], function(app, Router, Backbone) {
    window.app = app;
    app.router = new Router();
    Backbone.history.start({
      root: app.root
    });
    $(document).on("click", "a:not([data-bypass])", function(evt) {
      var href;
      href = $(this).attr("href");
      if (href && href.indexOf("#") === 0) {
        evt.preventDefault();
        return Backbone.history.navigate(href, {
          trigger: true
        });
      }
    });
    return app.router.navigate('#home', {
      trigger: true
    });
    /*
        if app.currentUser.authenticated()
            # redirect to user page
            app.router.navigate('#home', {trigger: true})
            # Initialize header and footer no matter what page we're on
            #app.AppView.setHeader(new app.views.Header())
            # app.setFooter()
        else
            # launch a login form
            app.router.navigate('#login', {trigger: true})
    */

  });

  /*
  # TO FUCKING DO
  # set access token expiration length in models/User
  # handle errors in login
  */


}).call(this);
