// 배열

// 배열 리터럴을 통해 배열 생성
// 자바스크립트에 모든 값이 배열의 요소가 될 수 있다.
const arr = ['바나나','복숭아','키위']
console.log(arr);


// 배열 생성자 함수
const arr2 = new Array();
console.log(arr2);

// length 프로퍼티 값이 인수인 배열 생성
const arr3 = new Array(10);
console.log(arr3);

// 전달 된 인수가 2개 이상이거나 숫자가 아닌경우 인수를 요소로 갖는 배열을 생성
const arr4 = new Array(1,2,3);
console.log(arr4);

// Array.of 메소드
// 전달된 인수를 요소로 갖는 배열을 생성
console.log(Array.of(10));
console.log(Array.of(1,2,3));
console.log(Array.of('hello','js'));

// 배열의 요소는 자신의 위치를 나타내는 인덱스를 가지며, -> 배열의 요소에 접근할때 사용
console.log(arr[0]); // 바나나
console.log(arr[1]); // 복숭아
console.log(arr[2]); // 키위

// 배열은 요소의 개수, 즉 배열의 길이를 나타내는 length 프로퍼티를 갖는다.
console.log(arr.length);

// 배열은 인덱스와 length 프로퍼티를 갖기 때문에
// for 문을 통해 순차적으로 요소에 접근 가느ㅏㅇ

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    
}