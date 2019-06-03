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
