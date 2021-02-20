/*
    callback
    ========
        - passing "one function" to "another function" as an argument called as callback.

        - in general, we will use callbacks, while making network calls.
*/


/*
    function fun_one(arg1){
        console.log( arg1() );
    };
    fun_one( function fun_two(){
        return "Hello";
    } );    //Hello
*/


/*
    function fun_one(arg1,arg2,arg3){
        console.log( arg1(), arg2(), arg3() );
    };

    fun_one( function frontEnd(){ return "Angular11" } , 
            function backEnd(){ return "NodeJS" } , 
            function databaseFn(){ return "MongoDB" } );
    //Angular11 NodeJS MongoDB
*/

/*
    function dbFun(param1,param2){
        console.log( param1(), param2() );
    };
    dbFun( ()=>{
        return "Success"
    }, ()=>{
        return "Error";
    } );   //Success Error
*/


/*
    function fun_one(arg1){
        return arg1("Hello");
    };
    fun_one( (param1)=>{
        console.log(param1);
    } );    //Hello
*/

/*
    function fun_one(arg1,arg2,arg3){
        return arg1("Hello_1")+"...."+arg2("Hello_2")+"...."+arg3("Hello_3");
    };
    fun_one( (param1)=>{
        console.log(param1);
    }, (param1)=>{
        console.log(param1);
    }, (param1)=>{
        console.log(param1);
    } );   //Hello_1   Hello_2    Hello_3
*/


/*
function add(num,callback){
    return callback(num+5,false);
};

function sub(num,callback){
    return callback(num-3,false);
};

function mul(num,callback){
    return callback(num*2,false);
}

function div(num,callback){
    return callback((num/2)-2,false);
};

add(5, (addRes,error)=>{
    if(!error){
        sub(addRes,(subRes,error)=>{
            if(!error){
                mul(subRes,(mulRes,error)=>{
                    if(!error){
                        div(mulRes,(divRes,error)=>{
                            if(!error){
                                console.log(divRes);
                            }
                        });
                    }
                });
            }
        });
    }
});   //callback hell     (promises)
*/






function add(num){
    return new Promise((resolve,reject)=>{
        resolve( num+5 );
    });
};

function sub(num){
    return new Promise((resolve,reject)=>{
        resolve( num-3 );
    });
};

function mul(num){
    return new Promise((resolve,reject)=>{
        resolve( num*2 );
    });
};

function div(num){
    return new Promise((resolve,reject)=>{
        resolve( (num/2)-2 );
    });
};


//consume the promise
//async & await
async function consume(){
    let addRes = await add(5);
    let subRes = await sub(addRes);
    let mulRes = await mul(subRes);
    let divRes = await div(mulRes);
    console.log( addRes, subRes, mulRes, divRes );
};
consume();    //10 7 14 5










































































































