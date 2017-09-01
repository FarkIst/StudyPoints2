var numbers = [1, -4, 9];

emptyArr = "Pickle Rick";

var myCallback1 = function(number){
return  number * -1;
}
var myCallback2 = function(number)
{
    return "<tr><td>"+number
}
var newSign = numbers.map(myCallback1);
var rows = numbers.map(myCallback2);



console.log(newSign);
console.log(emptyArr);