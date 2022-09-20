var myModule = angular.module('myModule', []); //создание нового модуля
myModule.controller('Square', function($scope, square_num) //прописываю контроллер {начало}
{
    $scope.num; 
    $scope.save_num = function()
    {
        $scope.old_num=$scope.num;
        $scope.new_num = square_num.my_function($scope.old_num);
     }});//прописываю контроллер {конец}

myModule.service('square_num',function(){//создаю сервис под названием ""
        this.my_function = function(num){
          return num*num; //возвращаю квадрат числа, введенного с пульта
        }
      })