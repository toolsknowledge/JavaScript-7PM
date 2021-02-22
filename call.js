/*
    let obj = {
        num1 : 10,
        num2 : 20
    };


    function my_fun(arg1,arg2,arg3){
        console.log( arg1+arg2+arg3+this.num1+this.num2 );
    };

    //my_fun(30,40,50);    //NaN
    //my_fun.call(obj,30,40,50);    //150

    let arr = [30,40,50];
    //my_fun.apply(obj,arr);


    const new_loc = my_fun.bind(obj);
    //new_loc(30,40,50);
*/




let obj = {
    arg1 : 10,
    arg2 : 20,
    arg3 : 30
};                                 //RAM   (0x300001234)

function myFun(arg1,arg2,arg3){
    console.log( arg1+arg2+arg3+this.arg1+this.arg2+this.arg3 );
};                           //RAM    (0x3000001235)


myFun.call(obj,10,20,30);       //120
myFun.apply(obj,[10,20,30]);    //120
myFun.bind(obj)(10,20,30);      //120




















