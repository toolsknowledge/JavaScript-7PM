//string
//collection of characters called as string
//""(double quotes) , ''(single quotes) , ``(backtick operator)
//``(backtick operator) also called as template literal.
//template literal introduced in "ES6"
//template literal used to "define the paragraphs"

var sub = "JavaScript";
var wish = `Welcome to ${sub}`;
console.log(wish);                      //Welcome to JavaScript


var tbl_name = `employees`;
var sal = 50000;
var sql_query = `select * from ${tbl_name} where esal>${sal}`;
console.log(sql_query);                 //select * from employees where esal>50000


var u_name = `ashokit`;
var u_pwd = `ashokit123`;
var login_query = `select * from ${tbl_name} where uname='${u_name}' and upwd='${u_pwd}'`;
console.log(login_query);                //select * from employees where uname='ashokit' and upwd='ashokit123'


var $data;
console.log($data);                 //undefined


var _data;
console.log(_data);                 //undefined


//var 123data;                        //Variable declaration expected.


var _123data;
console.log(_123data);              //undefined



//== (values)
//=== (values and datatypes)
console.log( 10 == "10" );              //true
console.log( 10 === "10" );             //false
console.log( 10 == "ten" );             //false
console.log( 10 === "ten" );            //false






















