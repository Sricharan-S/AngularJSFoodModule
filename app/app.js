var timeBomb = angular.module('timeBomb',['ngRoute']);

timeBomb.config(['$routeProvider',function($routeProvider){
   $routeProvider.
   when('/bestseller',{
     templateUrl:'views/bestseller.html'
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

timeBomb.controller('FoodController',['$scope',function($scope){
   $scope.foods = [
  {
    item:'POPCORN LARGE',
    rate:140,
    nos:0,
    available:false
  },
  {
    item:'CREAM DONUT',
    rate:70,
      nos:0,
    available:false
  },
  {
    item:'NACHOS WITH CHEESE',
    rate:150,
      nos:0,
    available:false
  },
  {
    item:'CHICKEN PUFF',
    rate:70,
      nos:0,
    available:false
  },
  {
    item:'CARAMEL POPCORN',
    rate:120,
      nos:0,
    available:false
  },
  {
    item:'COLD COFFEE',
    rate:100,
      nos:0,
    available:false
  },
  {
    item:'CHILLI CHICKEN PIZZA',
    rate:170,
      nos:0,
    available:false
  },

  {
    item:'GARDEN VEG PIZZA',
    rate:160,
      nos:0,
    available:false
  },
  {
    item:'MARGHERITA PIZZA',
    rate:160,
      nos:0,
    available:false
  },
  {
    item:'PANNEER TIKKA PIZZA',
    rate:160,
      nos:0,
    available:false
  },
  {
    item:'VEG MASALA SANDWICH',
    rate:140,
      nos:0,
    available:false
  },
  {
    item:'CHILLI CHICKEN SANDWICH',
    rate:140,
      nos:0,
    available:false
  },
  {
    item:'RED JUICE',
    rate:100,
      nos:0,
    available:false
  },
  {
    item:'WATERMELON JUICE',
    rate:100,
      nos:0,
    available:false
  },
  {
    item:'WATER',
    rate:40,
      nos:0,
    available:false
  },
  {
    item:'CAPPUCCINO',
    rate:100,
      nos:0,
    available:false
  },
  {
    item:'GREEN TEA',
    rate:110,
      nos:0,
    available:false
  },
  {
    item:'COKE SMALL',
    rate:90,
      nos:0,
    available:false
  },
  {
    item:'HOT DOG',
    rate:100,
      nos:0,
    available:false
  },
  {
    item:'CHICKEN TIKKA KAATI ROLL',
    rate:110,
      nos:0,
    available:false
  },
  {
    item:'VEG KAATI ROLL',
    rate:100,
      nos:0,
    available:false
  },
  {
    item:'PANNEER KAATI ROLL',
    rate:115,
      nos:0,
    available:false
  },
  {
    item:'CHICKEN KAATI ROLL',
    rate:115,
      nos:0,
    available:false
  },
  {
    item:'BHEL PURI',
    rate:100,
      nos:0,
    available:false
  },
  {
    item:'VADA PAV',
    rate:100,
      nos:0,
    available:false
  },
  {
    item:'SAMOSA',
    rate:100,
     nos:0,
    available:false
  },
  {
    item:'PAPDI CHAAT',
    rate:100,
      nos:0,
    available:false
  },
  {
    item:'JODHPURI CHAAT',
    rate:100,
      nos:0,
    available:false
  },
  {
    item:'DAHI BATATA PURI',
    rate:100,
      nos:0,
    available:false
  }

];

}])
