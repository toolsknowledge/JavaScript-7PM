//var
//let
//cont

//1) string
//2) number
//3) boolean
//4) undefined
//5) null
//6) bigint
//7) Symbol




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


//number
//decimal
//double
//hexadecimal   ==> 0x
//octal         ==> 0o
//binary        ==> 0b
var decimalNum = 100;
var doubleNum = 100.12345;
var hexadecimalNum = 0x123ABC;
var octalNum = 0o123;
var binaryNum = 0b101010;
console.log( decimalNum,
             doubleNum,
             hexadecimalNum,
             octalNum,
             binaryNum );


//boolean
//true / false
var flag = true;
console.log( flag );        //true


//array
//collection of indexed and hetrogeneous Elements called as Array
//[]
//for() , while() , do while()
//forEach() for...of()   for...in()
var arr1 = [10,20,30,40,50];
arr1.forEach(function(arg1,arg2){
    console.log( arg1, arg2 );
});

var front_end = [`Angular`,`ReactJS`,`VueJS`];
var databases = [`Oracle`,`MySQL`,`MongoDB`];
front_end.forEach( (element,index)=>{
    console.log( element, databases[index] );
} );


//JSON
//Java Script Object Notation
//Java Script "Objects"
//"Exchange" the data over the Network
//Objects -- {}
//Arrays  -- []
//data    -- key & value pairs
//key & value separated by using ":"
//key & value pairs separated by using ","
var obj = {
    sub_one : "Angular11",
    sub_two : "NodeJS",
    sub_three : "MongoDB"
};
console.log(
    obj.sub_one,
    obj.sub_two,
    obj.sub_three
);        //Angular11 NodeJS MongoDB


//for...in     //ES6
for(var key in obj){
    console.log(obj[key]);
};    //Angular11
      //NodeJS
      //MongoDB
























































