function add (n1, n2) {
    return n1 + n2;
}

var sub = function (n1,n2){
    return n1 - n2;
}



   /*     var cb = function(n1,n2, callback){
            return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
        }
  */
    
  
  

console.log("1: " + add(1,2) )     // 3
console.log("2: " + add )          // function add(n1, n2){return n1 + n2;} /function name
console.log("3: " + add(1,2,3) ) ; // 3 
console.log("4: " + add(1) );	  // NaN -Not a Number, insuficcient arguments
console.log("5:" + cb(3,3,add) ); // string
console.log("6:" + cb(4,3,sub) ); //string
console.log("7: " +  cb(3,3,add())); // add refers to 3rd argument, which is callback. Invalid
console.log("8: " + cb(3,"hh",add));// string is unaccepted as argument



var newCb = function (n1, n2, callback) {
    try {
        if (typeof n1 === 'number' && typeof n2 === 'number') {
            if (typeof callback === 'function') {
                return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
            } else {
                throw new Error("Callback failed because function is not declared or not a function");
            }
        } else {
            throw new Error("Callback failed because function is not declared or not a function");
        }
    } catch (e) {
        console.log(e.name + ': ' + e.message);
    }
};






function mul(n1, n2) {
    return n1 * n2;
}


console.log(newCb(3, 4, mul));