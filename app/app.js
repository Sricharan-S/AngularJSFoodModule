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


timeBomb.service('cartservice',function(){
	this.cartitems=[];
	this.addtocart=function(item){
		return this.cartitems.push(item);
	}
	this.computetotal =function(){
		var total=0;
		this.cartitems.forEach(function(item){
			total +=item.rate;
		});
		return total;
	}
});


timeBomb.controller('FoodController',['$scope','$http','cartservice',function($scope,$http,cartservice){

  $scope.additem = function (item) {
          cartservice.addtocart(item);
}

$http.get('data/bestseller.json').then(function(res){
   $scope.foods = res.data;
 })
}]);

timeBomb.controller('BillController',['$scope','$rootScope','$http','cartservice',function($scope,$rootScope,$http,cartservice){
          $scope.billfoods=cartservice.cartitems;
          $rootScope.total=cartservice.computetotal();
}]);
