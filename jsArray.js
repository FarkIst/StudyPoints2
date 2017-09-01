var boys =["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];
var all = boys.concat(girls);
var j1 = all.join('-');
var j2 = all.join('(-)');
all.push("Lone", "Gitte");
all.unshift("Hans", "Kurt");
all.shift("Hans");
all.pop("Gitte");
var rem = all.splice(all.length - 5,2);
all.reverse();
all.sort();
var uppercase = all.map(function(up){
    return up.toUpperCase();
});

var filter = all.filter(function(f){
   return f.startsWith('I') || f.startsWith('l') || f.startsWith('L'); 
});

console.log("boys: "+boys);
console.log("grills: " + girls);
console.log("inserted - :"+j1);
console.log("inserted (-) :"+j2);
console.log("removed: "+rem);
console.log("Uppercase: " + uppercase);
console.log("Filter: " + filter);
console.log("---------------------------");

console.log("all Array: " + all);