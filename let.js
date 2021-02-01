//let
//"let" keyword introduced in ES6
//let keyword used to declare the variables

//differences between var and let keyword


/*
    for(let i=0;i<5;i++){
    };
    console.log(i);        //let:ReferenceError: i is not defined      //var:5
    //var keyword breaks the scope rule
    //let keyword obeys the scope rule
*/


/*
    //global variable
    let data = 100;
    {
        //local variable
        let data = 200;
    }

    console.log( data );           //let: 100       //var: 200
    //if block code effects the global member because of var keyword, then that issue technically called as Global Polluting Issue
    //Global Polluting Issue Raised because of var keyword
    //we can overcome global polluting issue by using let keyword
*/




/*
    console.log( data );        //let :ReferenceError: Cannot access 'data' before initialization        
                                //var : undefined
    let data = 100;

    //if we get undefined, when ever accessing the variable before it's initilization called as variable hoisting.
    //variable hoisting issue raised because of var keyword
    //we can overcome variable hoisting issue by using let keyword.
*/


/*
    let data = 100;
    let data = 200;
    console.log( data );         //let:SyntaxError: Identifier 'data' has already been declared     //var:200
    //var keyword allows the duplicate variables
    //let keyword won't allows the duplicate variables
*/

/******************************************************************************
 *          var                                     let
 * 
 * 1)  before ES6                                   ES6
 * 
 * 2) allows duplicate variables                    won't allow duplicate variables
 * 
 * 3) variable hoisting raised here                 we can overcome variable hoisting issue here
 * 
 * 4) it breaks the scope rule                      obeys the scope rule
 * 
 * 5) global polluting issue                        we can overcome global polluting issue 
 *    raised because of var 
 *    keyword
 *******************************************************************************/



//const
//we can't change the values

/*
    const data = 100;
    data = 200;
    console.log( data );       //TypeError: Assignment to constant variable.
*/


/*
    const arr = [10,20,30,40,50];
    //arr = [];
    arr[0] = 100;
    arr[4] = 500;
    arr.push(600);
    console.log( arr );       //[ 100, 20, 30, 40, 500, 600 ]
*/



/*
    const obj = {
        key1 : "Hello_1",
        key2 : "Hello_2",
        key3 : "Hello_3"
    };
    //obj = {};         //TypeError: Assignment to constant variable.

    obj.key1 = "Angular11";
    obj.key2 = "NodeJS";
    obj.key3 = "MongoDB"
    obj.key4 = "MEAN Stack";
    console.log( obj );
*/

//number
//string
//boolean
//undefined
//null
//Symbol
//bigint


//Symbol keyword provides the secuirity to data
//console.log( Symbol("Hello") );


//bigint
//2^63  to -2^63-1
//bigint numbers suffix with "n"

let my_number = 1234567891234567891234567891234567891234567891234567891234567891234567891234567891234567891234567891234567891234567891234567891234567891234567891234567891234567891234567891234567891234567891234567891234567891234567891234567891234568n;
console.log( my_number );



































































































































