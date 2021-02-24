//Currying
//Converting Tightly Coupled Business Logic to Loosly Coupled Business Logic Called as Currying

/*
    let add = (num1,num2)=>{
        console.log("Addition...",(num1+num2));

        return (num1,num2)=>{
            console.log("Subtraction...",(num1-num2));

            return (num1,num2)=>{   
                console.log("Multiplication....",(num1*num2));

                return (num1,num2)=>{
                    console.log("Division....", (num1/num2) );
                }
            };
        };

    };

    add(10,10)(10,10)(10,10)(10,10);
*/


let add = (num1,num2)=>{
    console.log("Addition....",(num1+num2) );

    return sub;
};

let sub = (num1,num2)=>{
    console.log("Subtraction....",(num1-num2));

    return mul;
};

let mul = (num1,num2)=>{    
    console.log("Multiplication....",(num1*num2));

    return div;
};

let div = (num1,num2)=>{
    console.log("Division....",(num1/num2));
};

add(10,10)(10,10)(10,10)(10,10);

















