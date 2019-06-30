var app = angular.module("App", [ 'ngRoute' ]);

function CtrlHeader($scope) {
	$scope.mensajeHeader = "Hola Mundo Vina mexico1";
}

// app.directive("w3TestDirective", [ function() {
//
// var directiveDefinitionObject = {
// restrict : "E",
// replace : true,
// template : "<ul>"
// + "<li><a href=\"#principal\">Principal2222</a></li>"
// + "<li><a href=\"#ingles\">Ingles</a></li>"
// + "<li><a href=\"#oracle\">Oracle</a></li>" +
//				   
// "</ul>"
// ,
// scope : true
// }
//
// return directiveDefinitionObject;
// } ]);

app
		.directive(
				"w3TestDirective",
				function() {
					// return {
					// template : "<ul>"
					// + "<li><a href=\"#principal\">Principal2222</a></li>"
					// + "<li><a href=\"#ingles\">Ingles</a></li>"
					// + "<li><a href=\"#oracle\">Oracle</a></li>" +
					// "</ul>"
					// };

					return {
						template :
						// " <ui class=\"mainMenu\"> "
						// + " <li class=\"item\" id=\"account\"> "
						// + " <a href=\"#principal\" class=\"btn\"><i
						// class=\"fas fa-user-circle\"></i>principal</a> "
						// + " <div class=\"subMenu\"> "
						// + " <a href=\"\">item-1</a> "
						// + " <a href=\"\">item-2</a> "
						// + " <a href=\"\">item-3</a> "
						// + " </div> "
						// + " </li> "
						// + " <li class=\"item\" id=\"about\"> "
						// + " <a href=\"#ingles\" class=\"btn\"><i class=\"fas
						// fa-address-card\"></i>ingles</a> "
						// + " <div class=\"subMenu\"> "
						// + " <a href=\"\">item-1</a> "
						// + " <a href=\"\">item-2</a> "
						// + " </div> "
						// + " </li> "
						// + " <li class=\"item\" id=\"support\"> "
						// + " <a href=\"#oracle\" class=\"btn\"><i class=\"fas
						// fa-info\"></i>oracle</a> "
						// + " <div class=\"subMenu\"> "
						// + " <a href=\"\">item-1</a> "
						// + " </div> "
						// + " </li> "
						// + " <a href=\"#\" class=\"btn\"><i class=\"fas
						// fa-sign-out-alt\"></i>Log Out</a> "
						// + " </li> "
						// + " </ui> "

						"<ul>                                                                                "
								+ "   <li class='active'><a  ><span>Homesss</span></a></li>                        "
								+ "   <li class='has-sub'><a  ><span>Products</span></a>                        "
								+ "      <ul>                                                                          "
								+ "         <li><a  ><span>Product 1</span></a></li>                            "
								+ "         <li><a  ><span>Product 2</span></a></li>                            "
								+ "         <li class='last'><a ><span>Product 3</span></a></li>               "
								+ "      </ul>                                                                         "
								+ "   </li>                                                                            "
								+ "   <li class='has-sub'><a  ><span>About</span></a>                           "
								+ "      <ul>                                                                          "
								+ "         <li><a  ><span>Company</span></a></li>                              "
								+ "         <li class='last'><a  ><span>Contact</span></a></li>                 "
								+ "      </ul>                                                                         "
								+ "   </li>                                                                            "
								+ "   <li class='last'><a href='#/' ><span>Log out</span></a></li>                       "
								+ "</ul>			                                                                    "

					};

				});

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
	$routeProvider.when('/logout', {
		templateUrl : "js/views/login.html",
		controller : "CtrlOracle"
	});
	$routeProvider.otherwise({
		redirectTo : '/principal'
	});

} ]);

// app.component('home', {
// template : '<h1>Home</h1><p>Hello, {{ $ctrl.user.name }} !</p>',
// controller : function() {
// this.user = {
// name : 'world'
// };
// }
// });

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
// console.log("logn consile");
//
// } ]);
//
app.factory("idioma", function() {
	return "es-es";
});

app.factory("matematicas_simples", function() {
	return {
		sumar : function(a, b) {
			return a + b;
		},
		restar : function(a, b) {
			return a - b;
		}
	}
});

app.factory("radio", function() {
	return 10;
});

app.factory("area", function() {
	return function(radio) {
		return 3.1416 * radio * radio;
	}
});

// app.controller("CtrlLogin", [ "$scope", "idioma", "matematicas_simples",
// "radio", "area",
// function($scope, idioma, matematicas_simples, radio, area) {
// $scope.idioma = idioma;
// $scope.suma = matematicas_simples.sumar(3, 6);
// $scope.area = area(radio);
//
// $scope.myFunc = function() {
// console.log("function called");
// };
//
// } ]);
//
app
		.controller(
				"CtrlLogin",
				[
						'$scope',
						'$location',
						'$log',
						'$http',
						function($scope, $location, $log, $http) {

							$scope.username = 'pepe';
							$scope.password = '123';

							var url = $location.url();

							console.log("url zzz:" + url);

							// console.log("function called");
							$scope.login = function() {

								var data = {
									'User' : {
										'username' : $scope.username,
										'password' : $scope.password
									}
								};

								var userJSON = JSON.stringify(data);

								// headers: {'Content-Type':
								// 'application/x-www-form-urlencoded'}

								var config = {
									headers : {
										'Content-Type' : 'application/x-www-form-urlencoded;charset=utf-8;'
									}
								}

								var req = {
									method : 'POST',
									url : 'http://localhost:8081/WebStudios/login',
									data : {
										username : $scope.username,
										password : $scope.password
									},
									headers : {
										'Content-Type' : 'application/json'
									}
								};

								$http(req)
										.success(
												function(response) {	
													var url = $location.url();
													var code = response.code;
													var messaje = response.messaje;
													console.log("response:"+ response);
													console.log("messaje:"+ messaje);
													console.log("code:" + code);
													if (code == 0) {
														$location.path("/principal");
													} else {
														$location.path("/");
													}

												})
										.error(
												function(response) {
													alert("Ha fallado la petición. Estado HTTP:"
															+ response.status);
													console.log("no exitosos");
												});
							}

							// $scope.myFunc = function() {
							// console.log("function called");
							//
							// $http({	
							// method : 'GET',
							// url : 'http://localhost:8081/WebStudios/login'
							// }).success(function(data, status, headers,
							// config) {
							// // fnOK(data);
							// console.log(data)
							//					
							// $location.path('/principal')
							// }).error(function(data, status, headers, config)
							// {
							// // fnError(data, status);
							// });
							//
							// };

						} ]);

app
		.controller(
				"CtrPrincipal",
				[
						'$scope',
						'$location',
						'$log',
						'$http',
						function($scope, $location, $log, $http) {
							var url = $location.url();
							console.log("url zzz:" + url);
							// console.log("function called");

							(function($) {
								$(document)
										.ready(
												function() {
													$('#cssmenu ul ul li:odd')
															.addClass('odd');
													$('#cssmenu ul ul li:even')
															.addClass('even');
													$('#cssmenu > ul > li > a')
															.click(
																	function() {
																		$(
																				'#cssmenu li')
																				.removeClass(
																						'active');
																		$(this)
																				.closest(
																						'li')
																				.addClass(
																						'active');
																		var checkElement = $(
																				this)
																				.next();
																		if ((checkElement
																				.is('ul'))
																				&& (checkElement
																						.is(':visible'))) {
																			$(
																					this)
																					.closest(
																							'li')
																					.removeClass(
																							'active');
																			checkElement
																					.slideUp('normal');
																		}
																		if ((checkElement
																				.is('ul'))
																				&& (!checkElement
																						.is(':visible'))) {
																			$(
																					'#cssmenu ul ul:visible')
																					.slideUp(
																							'normal');
																			checkElement
																					.slideDown('normal');
																		}
																		if ($(
																				this)
																				.closest(
																						'li')
																				.find(
																						'ul')
																				.children().length == 0) {
																			return true;
																		} else {
																			return false;
																		}
																	});
												});
							})(jQuery);

							$scope.login = function() {
								$location.path(url + 'principal');
								// $http({
								// method : 'GET',
								// url :
								// 'http://localhost:8081/WebStudios/login'
								// }).success(function(data, status, headers,
								// config) {
								// $location.path('/principal.html');
								// $scope.seguro = data;
								// console.log("exitosos");
								// }).error(function(data, status, headers,
								// config) {
								// alert("Ha fallado la petición. Estado HTTP:"
								// + status);
								// console.log("no exitosos");
								// });
							}

							// $scope.myFunc = function() {
							// console.log("function called");
							//
							// $http({
							// method : 'GET',
							// url : 'http://localhost:8081/WebStudios/login'
							// }).success(function(data, status, headers,
							// config) {
							// // fnOK(data);
							// console.log(data)
							//					
							// $location.path('/principal')
							// }).error(function(data, status, headers, config)
							// {
							// // fnError(data, status);
							// });
							//
							// };

						} ]);
