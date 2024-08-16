// 클래스 기본문법
// 동일한 종류의 객체를 여러개 만들기 위해 사용한다.

class Student {

    // 생성자를 통해 객체(인스턴스)를 생성하고 초기화 가능
    // 생성자는 1개 이상 정의될 수 없다. (생략하면 암묵적으로 정의됨)
    // 암묵적으로 this를 반환하므로 return은 작성하지 않아도 된다.
    constructor(name) {
        this.group = 1;
        this.name = name;
        // this.introduce = function() {
        //     console.log(`안녕하세요 저는 ${this.group}반 학생 ${tihs.name}입니다.`);
        // }
    }

    // 프로토타입 메서드
    introduce() {
        console.log(`안녕하세요 저는 ${this.group}반 학생 ${tihs.name}입니다.`);
    }
}

let student1 = new Student('홍길동');
console.log(student1);


// 클래스 몸체에 정의한 메서드는 프로토 타입 메서드가 된다.
// Constructor에 정의한 내용은 객체의 속성이 된다.

/* 생성자 함수와 클래스의 차이점
1. 클래스 생성자를 new와 함께 호출하지 않으면 에러가 발생한다.
함수 내부 프로퍼티 [[IsClassConstructor]] : true 가 사용 된다.
2. 클래스에 정의 된 메서드는 열거 불가하다. enumerable 플래그가 false이기 때문이다.
따라서 for..in 으로 객체 순회 시 메서드 순회 대상에서 제외된다.
3. 클래스는 호이스팅이 발생하지 않는 것처럼 동작한다. 
함수 선언문 생성자 함수는 함수 호이스팅, 함수 표현식 생성자 함수는 변수 호이스팅이 발생한다.
4. 클래스는 항상 use strict 적용된다.
클래스 생성자 안 코드는 자동으로 엄격 모드가 적용 된다. 
=> 클래스 문법은 생성자 함수와는 다른 새로운 객체 생성 매커니즘이다.
*/

function Teacher(name) {
    this.group = 1;
    this.name = name;
}

Teacher.prototype.introduce = function() {
    console.log(`안녕하세요 저는 ${this.group}반 교사 ${this.name}입니다.`);   
}

let teacher = new Teacher('bear');
console.log(teacher);
teacher.introduce();

// Student(); // Class constructor Student cannot be invoked without 'new'
Teacher();