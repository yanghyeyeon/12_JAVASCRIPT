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