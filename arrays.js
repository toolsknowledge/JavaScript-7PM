//Arrays
//Collection of indexed and hetrogeneous elements called as array
//[]
//index starts with "0"
//we can access array elements by using indexes


/*
    //length
    //length property, used to know the length of array
    let arr = [10,20,30,40,50,60,70,80,90,100];
    console.log(arr.length);                        //10
    console.log( arr[0], arr[4], arr[9]);           //10 50 100
    console.log( arr[-1],arr[10] );                 //undefined undefined
    arr.length = 5;
    console.log( arr[0],arr[4],arr[5] );            //10 50 undefined
*/


/*
    //delete
    //delete property, deletes the particular element
    //delete property never releases the memory
    let arr = [10,20,30,40,50,60,70,80,90,100];
    delete arr[4];
    delete arr[8];
    console.log(arr);           //[ 10, 20, 30, 40, <1 empty item>, 60, 70, 80, <1 empty item>, 100 ]
    console.log(arr.length);    //10
*/


/*

    //push()                //add the element at end of array
    //pop()                 //removes the element at end of array
    //unshift()             //add the element at begining of array
    //shift()               //remove the element from begining

    let arr = ["Hello_2","Hello_3","Hello_4"];
    console.log(arr);                               //[ 'Hello_2', 'Hello_3', 'Hello_4' ]

    arr.push("Hello_5");
    console.log(arr);                               //[ 'Hello_2', 'Hello_3', 'Hello_4', 'Hello_5' ]


    arr.unshift("Hello_1");
    console.log(arr);                               //[ 'Hello_1', 'Hello_2', 'Hello_3', 'Hello_4', 'Hello_5' ]

    arr.pop();
    console.log(arr);                               //[ 'Hello_1', 'Hello_2', 'Hello_3', 'Hello_4' ]

    arr.shift();
    console.log(arr);                               //[ 'Hello_2', 'Hello_3', 'Hello_4' ]
*/



/*
    //splice()
    //splice() function, used to delete or add element at any position of array
    let arr = [10,20,30,40,50,60,70,80,90,100];
    console.log(arr);               //[10,20,30,40,50,60,70,80,90,100]

    arr.splice(4,3);
    console.log(arr);               //[10,20,30,40,80,90,100]

    arr.splice(4,1);
    console.log(arr);               //[ 10, 20, 30, 40, 90, 100 ]


    arr.splice(0,1);
    console.log(arr);               //[ 20, 30, 40, 90, 100 ]


    arr.splice(4,1);
    console.log(arr);               //[ 20, 30, 40, 90 ]


    arr.splice(3,0,50,60,70,80);
    console.log(arr);               //[20,30,40,50,60,70,80,90]


    arr.splice(0,0,10);
    console.log(arr);               //[10,20,30,40,50,60,70,80,90]


    arr.splice(9,0,100);
    console.log(arr);               //[10,20,30,40,50,60,70,80,90,100]
*/




/*
    //slice()
    //choose only particular elements
    let arr = [10,100,1000,10000,100000,20,200,2000,20000,200000];
    console.log( arr.slice(4,6) );                  //[ 100000, 20 ]
    console.log( arr.slice(6,8) );                  //[ 200, 2000 ]
    console.log( arr.slice(0,1) );                  //[ 10 ]
    console.log( arr.slice(9) );                    //[ 200000 ]
*/




/*
    let arr = [10,20,30,40,50,60,70,80,90,100];
    console.log(
        [...arr.slice(5),                       
        ...arr.slice(0,5)]
    );



let arr = [10,20,30,80,90,100,40,50,60,70];
let arr1 = arr.slice(0,3);
let arr2 = arr.slice(6);
let arr3 = arr.slice(3,6);
console.log( [...arr1,...arr2,...arr3] );
*/

/*
    //map()
    //it is used to manipulate the each and every array elememt.
    console.log(
        [10,20,30,40,50].map((element,index)=>{
            return element*10;
        })
    );     //[ 100, 200, 300, 400, 500 ]

    console.log(
        [100,200,300,400,500].map((element,index)=>{
            return `$ ${element}`;
        })
    );  //[ '$ 100', '$ 200', '$ 300', '$ 400', '$ 500' ]
*/



/*
    //filter()
    //used to create the new array based on condition
    console.log(
        [10,20,30,40,50].filter((element,index)=>{
            return element<=30;
        })
    );              //[ 10, 20, 30 ]

    console.log(
        [100,200,300,400,500].filter((element,index)=>{
            return element>=300;
        })
    );      //[ 300, 400, 500 ]


console.log(
    [1,2,3,4,5].map((element,index)=>{
        return element*100;
    }).filter((element,index)=>{
        return element<=500;
    })
);              //[ 100, 200, 300, 400, 500 ]
*/

/*
    //reduce()
    //it is used to find the sum of array elements
    console.log(
        [1,2,3,4,5].reduce((firstValue,nextValue)=>{
            return firstValue+nextValue;
        })
    );     //15
    console.log(
        [100,200,300,400,500].map((element,index)=>{
            return element/10;
        }).filter((element,index)=>{
            return element<=50;
        }).reduce((firstValue,nextValue)=>{
            return firstValue+nextValue;
        })
    );              //150
*/

/*
    //reduceRight()
    //find the summation from right to left in array
    console.log(
        ["Angular11","to","Welcome"].reduceRight((firstValue,nextValue)=>{
            return firstValue+" "+nextValue;
        })
    );              //Welcome to Angular11
*/

/*
    //some()
    //if at least one element satisfies the condition, then it will return true otherwise false
    console.log(
        [10,20,30,40,50].some((element,index)=>{
            return element<=10;
        })
    );          //true

    console.log(
        [10,20,30,40,50].some((element,index)=>{
            return element<10;
        })
    );      //false
*/


/*
    //every()
    //if all elements satisfies the condition then it will return true otherwise it will return false
    console.log(
        [10,20,30,40,50].every((element,index)=>{
            return element<=50;
        })
    );          //true


    console.log(
        [10,20,30,40,50].every((element,index)=>{
            return element<50;
        })
    );              //false
*/

/*
    //includes()
    //it is used to search particular element
    console.log(
        [10,20,30,40,50].includes(30)
    );   //true

    console.log(
        [10,20,30,40,50].includes(300)
    );      //false

    console.log(
        ["Angular11","NodeJS","MongoDB"].includes("Angular11")
    );      //true
*/

/*
    //findIndex()
    //it is used to find the index of particular element
    console.log(
        [10,20,30,40,50].findIndex((element,index)=>{
            return element === 40;
        })
    );   //3

    console.log(
        ["Angular11","ReactJS","VueJS","NodeJS","MongoDB"].findIndex((element,index)=>{
            return element === "VueJS";
        })
    );    //2



    let arr = [10,20,30,40,50];
    arr.splice(arr.findIndex((element,index)=>{
        return element===30;
    }),1);
    console.log(arr);  //[ 10, 20, 40, 50 ]



    let arr1 = [100,200,300,400,500];
    arr1.splice(arr1.findIndex((element,index)=>{
        return element === 400;
    }),1);
    console.log(arr1);              //[ 100, 200, 300, 500 ]


    let arr2 = [{"sub":"Angular11"},
                {"sub":"NodeJS"},
                {"sub":"ReactJS"},
                {"sub":"VueJS"},
                {"sub":"MongoDB"}];
    arr2.splice(arr2.findIndex((element,index)=>{
        return element.sub === "VueJS"
    }),1);
    console.log(arr2);
*/


/*
    //indexOf()
    //it won't create indexes to repeated elements in array
    let arr1 = ["Angular","NodeJS","Angular","ReactJS","NodeJS"];
    arr1.forEach((element,index)=>{
        console.log( arr1.indexOf(element) );
    });   //0 1 0 3  1
*/

/*
let arr1 = [100,200,300,100,200,300];
arr1.forEach((element,index)=>{
    console.log( arr1.indexOf(element) , index );
});


let arr2 = [10,20,30,40,10,20,40,10];
console.log(
    arr2.filter((element,index)=>{
        return arr2.indexOf(element) === index;
    })
);    //[ 10, 20, 30, 40 ]

*/


/*
    //copyWithin()
    let arr1 = [10,20,30,40,50,60,70,80,90,100];
    arr1.copyWithin(3);
    console.log(arr1);          //[10,20,30,10,20,30,40,50,60,70]


    let arr2 = [10,20,30,40,50,60,70,80,90,100];
    arr2.copyWithin(5);
    console.log(arr2);          //[10, 20, 30, 40, 50,10, 20, 30, 40, 50]


    let arr3 = [10,20,30,40,50,60,70,80,90,100];
    arr3.copyWithin(0);
    console.log(arr3);      //[10,20,30,40,50,60,70,80,90,100]


    let arr4 = [10,20,30,40,50,60,70,80,90,100];
    arr4.copyWithin(3,7);
    console.log(arr4);    //[10, 20, 30, 80,  90,100, 70, 80, 90, 100]


    let arr5 = [10,20,30,40,50,60,70,80,90,100];
    arr5.copyWithin(2,8);
    console.log(arr5);    //[10, 20, 90, 100,  50,60, 70, 80,  90, 100]


    let arr6 = [10,20,30,40,50,60,70,80,90,100];
    arr6.copyWithin(8,2);
    console.log(arr6);


    let arr7 = [10,20,30,40,50,60,70,80,90,100];
    arr7.copyWithin(2,4,8);
    console.log(arr7);



    let arr8 = [10,20,30,40,50,60,70,80,90,100];
    arr8.copyWithin(1,3,8);
    console.log(arr8);
*/

/*
    //find()
    console.log(
        [10,20,30].find((element,index)=>{
            return element === 20;
        })
    );    //20

    console.log(
        [10,20,30].find((element,index)=>{
            return element === 200;
        })
    );    //undefined
*/


/*
    //immutability        State Management App  (NgRX)  
    let arr1 = [10,20,30];
    let arr2 = [...arr1];
    console.log(arr1);                  //[ 10, 20, 30 ]
    console.log(arr2);                  //[ 10, 20, 30 ]

    arr1.push(40);
    arr2.push(50);
    console.log(arr1);                  //[ 10, 20, 30, 40 ]
    console.log(arr2);                  //[ 10, 20, 30, 50 ]
*/


//mutability
let arr1 = [10,20,30];
let arr2 = arr1;
console.log(arr1);                      //[ 10, 20, 30 ]
console.log(arr2);                      //[ 10, 20, 30 ]

arr1.push(40);
arr2.push(50);
console.log(arr1);                      //[ 10, 20, 30, 40, 50 ]
console.log(arr2);                      //[ 10, 20, 30, 40, 50 ]

























































































































































































































































































































































































 































































































