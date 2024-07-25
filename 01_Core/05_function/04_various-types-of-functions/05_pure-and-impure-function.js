/* 
순수 함수 : 외부 상태에 의존하지 않고 변경하지도 않는 함수
비순수 함수 : 외부 상태에 의존하거나 외부 상태를 변경하는 함수
*/

var cnt = 0;

// 순수함수는 최소 하나 이상의 인수를 전달 받으며
// 인수의 불변성을 유지
function increase(n) {
    return ++n;
}

cnt = increase(cnt);
console.log(cnt);


// 비순수 함수
function decrease() {
    return --cnt; // 외부상태에 의존하며 외부 상태를 변경한다.
}

// 외부 상태(cnt)를 직접 변경을 해서 상태변화를 추적하기 어려워진다.
decrease();
console.log(cnt);

