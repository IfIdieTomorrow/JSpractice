let memberArray = ['egoing','graphittie', 'leezhce'];
console.log("memberArray[2]",memberArray[2]);

let memberObject = {
    manager : 'egoing',
    developer : 'graphittie',
    designer : 'leezhce'
}
memberObject.designer = 'leezche';
console.log("memberObject.designer "+memberObject.designer);
console.log("memberObject['designer'] "+memberObject['designer']);
delete memberObject.manager;
//객체의 값을 지울때는 delete 메서드를 사용한다.
console.log("after delete memberObject.manager",memberObject.manager); 


