var app = angular.module("App", [ 'ngRoute' ]);

function CtrlHeader($scope) {
	$scope.mensajeHeader = "Hola Mundo Vina mexico1";
}

app.config([ '$routeProvider', function($routeProvider) {

	$routeProvider.when('/', {
		templateUrl : "js/views/login.html",
		controller : "CtrLogin"
	});

	$routeProvider.when('/principal', {
		templateUrl : "js/views/principal.html",
		controller : "CtrPrincipal"
	});

	$routeProvider.when('/ingles', {
		templateUrl : "js/views/ingles.html",
		controller : "CtrlIngles"
	});

	$routeProvider.when('/oracle', {
		templateUrl : "js/views/oracle.html",
		controller : "CtrlOracle"
	});

	$routeProvider.otherwise({
		redirectTo : '/principal'
	});

} ]);

app.controller("CtrLogin", [ "$scope", function($scope) {
	$scope.titulo = "Login";
} ]);

app.controller("CtrPrincipal", [ "$scope", function($scope) {
	$scope.titulo = "Principal";
} ]);

app.controller("CtrlIngles", [ "$scope", function($scope) {
	$scope.titulo = "Inglesr";
} ]);

app.controller("CtrlOracle", [ "$scope", function($scope) {
	$scope.titulo = "Oracle";
} ]);

// function Login() {
// this.login = function() {
// return this.ancho * this.alto;
// }
// }
//
// function RemoteResource($http, baseUrl) {
// this.get = function(fnOK, fnError) {
// $http({
// method : 'GET',
// url : baseUrl + '/login'
// }).success(function(data, status, headers, config) {
// fnOK(data);
// }).error(function(data, status, headers, config) {
// fnError(data, status);
// });
// }
// }
//
// function RemoteResourceProvider() {
// var _baseUrl;
// this.setBaseUrl = function(baseUrl) {
// _baseUrl = baseUrl;
// }
// this.$get = [ '$http', function($http) {
// return new RemoteResource($http, _baseUrl);
// } ];
// }
//
// app.constant("baseUrl", "http://localhost:8081/WebStudios");
// app.config([ 'baseUrl', 'remoteResourceProvider',
// function(baseUrl, remoteResourceProvider) {
// remoteResourceProvider.setBaseUrl(baseUrl);
// } ]);
//
// app.provider("remoteResource", RemoteResourceProvider);
//
// app.controller("CtrlLogin", [ '$scope', 'remoteResource',
// function($scope, remoteResource) {
// remoteResource.get(function() {
// $scope.seguro = seguro;
// }, function(data, status) {
// alert("Ha fallado la petición. Estado HTTP:" + status);
// });
//
// } ]);
