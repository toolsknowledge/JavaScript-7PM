//call()
//apply()
//bind()

let obj = {
    num1 : 10,
    num2 : 20
};

function myFun(arg1,arg2,arg3){
    console.log( arg1+arg2+arg3+this.num1+this.num2 );
};

myFun.call(obj,30,40,50);                   //150
myFun.apply(obj,[30,40,50]);                //150

let newFun = myFun.bind(obj);
newFun(30,40,50);                           //150
