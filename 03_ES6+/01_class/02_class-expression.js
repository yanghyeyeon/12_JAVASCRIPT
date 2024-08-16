// 클래스 표현식

// 1. 익명 클래스 표현식
let Tutor = class {
    teach() {
        console.log('이해하셨나요~?');
    }
}

new Tutor().teach();

// 2. 기명 클래스 표현식
let Tutee = class MyTutee {
    learn() {
        console.log('이해했어요~');
        console.log(MyTutee); //MyTutee라는 이름은 클래스 안에서만 사용가능
        
    }
}

new Tutee().learn();
// console.log(MyTutee); // MyTutee is not define

// 3. 클래스 동적 생성
function makeTutee(message) {

    return class{
        feedback() {
            console.log(message);
            
        }
    }
}

let SecondTutee = makeTutee("100점!!");
new SecondTutee().feedback();

// 클래스도 함수처럼 일급객체이다.
// 일급객체
// - 변수에 할당할 수 있고,
// - 다른함수를 인자로 받을 수 있고,
// - 다른 함수의 결과로써 리턴 될 수 있는 객체
