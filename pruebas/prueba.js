// deleted duplicated items array whit Set
   
function arrayUniqueSet(array) {
    var a = new Set(array);
    return Array.from(a);
}

console.log('hola');
console.log(arrayUniqueSet([1,1,2,2,3,3]));

//validation of email

function isValidEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

console.log(isValidEmail('remunozz@gmail.com'));

//print first number prime