define ["app", 'backbone', 'views/Home'], (app, Backbone) ->
  class Router extends Backbone.Router
    routes:
      "home": "index"
      "login": "login"

    index: ->
        app.AppView.setMainView(new app.views.Home())

    account: ->
        console.log("account")
        app.AppView.setMainView(new app.views.Main())
    login: ->
        #app.AppView.setMainView(new app.views.LoginHomepage())
        app.AppView.setMainView(new app.views.Login())

  return Router
