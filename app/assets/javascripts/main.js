var Blog = angular.module('Blog', ['ngRoute']);

Blog.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/post', {
      templateUrl: "/templates/main_post.html",
      controller: 'PostCtrl'
    });
    $routeProvider.otherwise({
      templateUrl: '/templates/main_index.html',
      controller: 'IndexCtrl'
    });
  }
]);
