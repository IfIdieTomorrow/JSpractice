console.log("Math.PI", Math.PI);
console.log("Math.random()", Math.random())
console.log("Math.floor(3.9)", Math.floor(3.9));

let MyMath = {
    PI : Math.PI,
    random : function(){    //method
        return Math.random();
    },
    floor : function(val){
        return Math.floor(val);
    }
}

console.log("MyMath.PI", MyMath.PI);
console.log("MyMath.random()", MyMath.random());
console.log("MyMath.floor(3.9",MyMath.floor(3.9));

//객체를 쓰지 않는 경우
let MyMath_PI = Math.PI;
function MyMath_random(){
    return Math.random();
}
function MyMath_floor(val){
    return MyMath.floor(val);
}
