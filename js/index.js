angular.module("apclone", ["ui.router"])
  .config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state("home", {
        template: "",
        url: "/"
      })
      .state("plans", {
        template: "plans view works",
        url: "/plans"
      })
  })
