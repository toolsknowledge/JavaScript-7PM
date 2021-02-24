console.log( "1234567891".match(/^\d{10}$/) );    //array     //null
console.log("11 111 1111".match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/) );
console.log( "hr@ashokit.in".match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) );
console.log( "341111111111111".match(/^(?:3[47][0-9]{13})$/) );