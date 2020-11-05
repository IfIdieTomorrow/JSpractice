let kim = {
    name : "kim",
    first : 10,
    second : 20
}

let lee = {
    name : "lee",
    first : 10,
    second : 10
}

function sum(prefix){
    // this가 call함수의 인자로 전달된 객체가 된다.
    return prefix+(this.first + this.second);
}

// sum()과 같다.
//call()메서드는 첫 번째 인자값으로는 this가 결정될 객체가 들어가고.
//두 번째 인자값부터 해당 메서드의 인자값으로 전달될 값이 들어간다.
console.log("sum.call(kim) ",sum.call(kim, '=> '));
console.log("sum.call(lee) ",sum.call(lee, ': '));

//bind함수는 this를 인자값으로 전달받은 객체를 고정시켜 새로운 객체를 함수(객체)를 생성한다.
let kimSum = sum.bind(kim, "-> ");
console.log('kimSum() ', kimSum());
