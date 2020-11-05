class Person {
//javascript class에서는 메서드를 정의할때 function을 쓰지 않는다.
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
        console.log('생성자 호출!');
    }
    sum = function(){
        return "prototype : " +(this.first+this.second);
    }
}

//이것도 가능하다.
//Person.prototype.sum = function(){
//  return "prototype : " +(this.first+this.second);
//}

//Person클래스를 상속받은 PersonPlus클래스
class PersonPlus extends Person{
    constructor(name,first, second, third){
        super(name, first, second);
        this.third = third;
    }
    sum(){
        return super.sum()+this.third;
    }
    avg(){
        return (this.first +this.second+this.third)/3;
    }
}

let kim = new PersonPlus('kim',10,20,30);


console.log("kim.sum()", kim.sum());
console.log("kim.avg()", kim.avg());
