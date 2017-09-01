function add(n1, n2){
    return n1 + n2;
}

var sub = function(n1,n2){
    return n1 - n2;
}


    try {
        var cb = function(n1,n2, callback){
            return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
        }
    } catch (error) {
        
    }
    
  
  

console.log("1: " + add(1,2) )     // 3
console.log("2: " + add )          // function add(n1, n2){return n1 + n2;}
console.log("3: " + add(1,2,3) ) ; // 3 
console.log("4: " + add(1) );	  // NaN -Not a Number
console.log("5:" + cb(3,3,add) ); //Result from the two numbers: 3 + 3 = function (n1, n2, callback){return "Result from the two numbers: " +n1+" + "+n2+" = " + cb;}
console.log("6:" + cb(4,3,sub) ); //Result from the two numbers: 4 + 3 = function (n1, n2, callback){return "Result from the two numbers: " +n1+" + "+n2+" = " + cb;
console.log("7: " +  cb(3,3,add())); // ..
console.log("8: " + cb(3,"hh",add));// ..
