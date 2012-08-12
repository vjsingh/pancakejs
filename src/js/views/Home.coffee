define ["views/AppView", 'app'], (AppView, app) ->
  app.views.Home = AppView.extend
    templateName: "home",

    additionalInitialize: () ->
