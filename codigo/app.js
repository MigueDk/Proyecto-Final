// Definición del módulo principal de la aplicación AngularJS llamado "appProyecto".
// Se indica que depende del módulo 'ngRoute' para manejar rutas. (Dks)
const app = angular.module("appProyecto", ['ngRoute']);

// Configuración de las rutas de la aplicación usando el servicio $routeProvider. (Dks)
app.config(function ($routeProvider) {
    // Definición de la ruta '/inicio' que carga la plantilla 'Inicio.html'. (Dks)
    $routeProvider
        .when('/inicio', {
            templateUrl: 'vistas/Inicio.html', // Especifica el archivo HTML a mostrar. (Dks)
        })
        // Definición de la ruta '/consultas' que carga 'Consultas.html' y usa el controlador 'ControladorConsultas'. (Dks)
        .when('/consultas', {
            templateUrl: 'vistas/Consultas.html', // Archivo HTML para la vista de consultas. (Dks)
            controller: 'ControladorConsultas'    // Controlador asociado a esta vista. (Dks)
        })
        // Definición de la ruta '/consumo' que carga 'Consumo.html' y usa el controlador 'ControladorConsumo'. (Dks)
        .when('/consumo', {
            templateUrl: 'vistas/Consumo.html',   // Archivo HTML para la vista de consumo. (Dks)
            controller: 'ControladorConsumo'      // Controlador asociado a esta vista. (Dks)
        })
        // Ruta por defecto: si la URL no coincide con ninguna definida, redirige a '/inicio'. (Dks)
        .otherwise({
            redirectTo: '/inicio' // Página por defecto si no se encuentra la ruta. (Dks)
        });
});

// Definición del controlador 'MenuController' para manejar el menú lateral de la aplicación. (Dks)
app.controller('MenuController', function($scope, $location) {
    // Se expone el servicio $location al scope para poder acceder a la información de la ruta actual desde la vista. (Dks)
    $scope.$location = $location;
});