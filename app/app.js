var timeBomb = angular.module('timeBomb',['ngRoute']);

timeBomb.config(['$routeProvider',function($routeProvider){
   $routeProvider.
   when('/bestseller',{
     templateUrl:'views/bestseller.html',
     controller:'FoodController'
   }).
   when('/drinks',{
     templateUrl:'views/drinks.html'
   }).
   when('/chaat',{
     templateUrl:'views/chaat.html'
   }).
   when('/snacks',{
     templateUrl:'views/snacks.html'
   }).
   when('/hotfoods',{
     templateUrl:'views/hotfoods.html'
   }).
   otherwise({
     redirectTo:'/'
   })

}]);





timeBomb.controller('FoodController',['$scope','$http',function($scope,$http){


  $scope.additem = function (item) {

        
          console.log(item.available);
}

$http.get('data/bestseller.json').then(function(res){
   $scope.foods = res.data;
 })
}]);
