function Person(name, first, second, third){
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
}

Person.prototype.sum = function(){
    return "prototype : "+(this.first+this.second+this.third);
}

let kim = new Person('kim',10,20,30);
kim.sum = function(){
    return "this : "+(this.first+this.second+this.third);
}
let lee = new Person('lee',10,10,10);
console.log("kim.sum()", kim.sum());
console.log("lee.sum()",lee.sum());

//프로토타입은 객체를 정의하는 시점이 아닌,  필요한 시점에 정의할 수 있기 때문에 메모리의 이점이 있습니다.
//또한, 프로토타입은 생성 된 모든 객체가 공통으로 사용할 수 있고 재정의가 가능하기 때문에 커스터마이징도 가능합니다.


 