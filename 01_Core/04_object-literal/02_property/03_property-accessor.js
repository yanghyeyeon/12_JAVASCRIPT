// 프로퍼티 접근

var dog = {
    name : '구찌',
    
    eat : function(food) {
        console.log(`${this.name}(은)는 ${food}를 맛있게 먹어요.`);
    }
}

// 마침표 표기법
console.log(dog.name);
dog.eat('고구마');

// 대괄호 표기법 - 프로퍼티 키는 반드시 따옴표로 감싼 문자열 사용
// console.log(dog[name]); name is not defined
console.log(dog['name']);
dog['eat']('고구마');


var obj = {
    'dash-key' : 'dash-value',
    0 : 1
};


//식별자 네이밍 규칙을 지키지 않는 이름은 반드시 대괄호 표기법으로 지정해야한다.
// console.log(obj.dash-key);
console.log(obj['dash-key']);

// console.log(obj.0);
console.log(obj['0']);

