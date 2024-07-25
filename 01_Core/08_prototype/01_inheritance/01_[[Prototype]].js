// [[Prototype]]

const user = {
    activate : true,
    login : function() {
        console.log('로그인이 되었습니다.');
        
    }
}

const student = {
    passion : true
}

// .__proto__ : [[Prototype]]의 getter,setter 이다.
// 함수 Object.getPrototypeOf or object.setPrototypeOf
// 이 두 메서드를 통해서 get, set 한다.
student.__proto__ = user;

console.log(student.activate);

student.login();

console.log(student.passion);

console.log('---------- 프로토타입 체인 ----------');

// 프로토 타입 체인
const greedyStudent = {
    class : 11,
    __proto__: student
}

console.log(greedyStudent.activate); // user
console.log(greedyStudent.passion); // student




