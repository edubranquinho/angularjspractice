angular.module("app").controller("SimpleController", function($scope) {
  $scope.fornecedores = [
    { id: "1", nome: "Spali" },
    { id: "2", nome: "Redlobster" },
    { id: "3", nome: "Produtor rural truck" }
  ];

  $scope.selectedOption = { id: "3", name: "Produtor rural truck" };
});
