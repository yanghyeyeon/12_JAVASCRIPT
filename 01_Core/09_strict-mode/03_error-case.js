// 에러 상황

// 암묵적 전역
(function() {
    // 'use strict';

    // 선언하지 않은 변수를 참조하면 에러가 발생한다.
    x = 1;

    console.log(x);
}());

// 2. 변수, 함수, 매개변수의 삭제
(function() {

    // 'use strict'

    var x = 1;

    // strict 모드에서는 식별자를 삭제할 수 없다.
    delete x;
}())

// 3. 매개변수 이름의 중복
(function() {

    'use strict'

    function test(x,x) {
        return x - x;
    }

    console.log(tset(1,2));
    

}());

// (function() {

//     function test(x,x) {
//         return x - x;
//     }
// }());
