                                        /***** Arrays *****/
//collection of "indexed" and "hetrogeneous" elements called as "array"
//we will represent Arrays by using "[]"
//we will access arrays values by using "indexes".
//index value starts with "0"


/*
    //length
    //used to know the length of array
    let arr = [10,20,30,40,50,60,70,80,90,100];
    console.log( arr[0],arr[4],arr[9],arr[10],arr[-1] );            //10 50 100 undefined undefined
    console.log( arr.length );                                      //10
    arr.length = 5;
    console.log(arr[0],arr[4],arr[5]);                              //10 50 undefined
    console.log( arr.length );                                      //5
*/


/*
    //delete
    //delte property deletes the particular element and never releases the memory
    let arr = [10,20,30,40,50,60,70,80,90,100];
    console.log( arr.length );                      //10

    delete arr[4];
    console.log(arr);                               //[ 10, 20, 30, 40, <1 empty item>, 60, 70, 80, 90, 100 ]
    console.log(arr.length);                        //10          
*/


/*
    //push()            ==> add at end
    //pop()             ==> remove from end
    //unshift()         ==> add at begining
    //shift()           ==> remove from begining
    let arr = [20,30,40];
    console.log( arr );             //[ 20, 30, 40 ]

    arr.push(50);
    console.log(arr);               //[ 20, 30, 40, 50 ]

    arr.unshift(10);
    console.log(arr);               //[ 10, 20, 30, 40, 50 ]


    arr.pop();
    console.log(arr);               //[ 10, 20, 30, 40 ]

    arr.shift();
    console.log(arr);               //[ 20, 30, 40 ]
*/


//splice()
let arr = [10,20,30,40,50,60,70,80,90,100];
arr.splice(4,2);
console.log(arr);               //[10,20,30,40,70,80,90,100]

arr.splice(4,1);
console.log(arr);               //[10,20,30,40,80,90,100]

arr.splice(5,1);
console.log(arr);               //[ 10, 20, 30, 40, 80, 100 ]

arr.splice(0,1);
console.log(arr);               //[ 20, 30, 40, 80, 100 ]

arr.splice(4,1);
console.log(arr);               //[ 20, 30, 40, 80 ]


arr.splice(3,0,50,60,70);
console.log(arr);               //[ 20, 30, 40, 50,60,70,80 ]

arr.splice(0,0,10);
arr.splice(8,0,90,100);
console.log(arr);












































