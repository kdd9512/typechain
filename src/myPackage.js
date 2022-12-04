
// JS 파일이므로 기본적으로 TS 의 타입체크 등의 보호기능은 이용할 수 없다.
// 이런 경우 JS 에 타입 보호기능을 추가할 수 있는 방법이 있는데, 먼저 이하와 같이 작성한다.

// 1. ts-check 를 주석으로 추가한다.
// 두 번째로 해야 할 작업은 tsconfig.json 에 "allowJs": true 를 추가하는 작업.
// @ts-check

// 3. jsDoc 사용하기.
// 주석으로 이루어진 코드로, 주석을 다는 것 만으로 TS 에게 param 이나 return 의 타입을 설명했듯,
// JS 파일 내부에서 해당 기능을 이용할 수 있다.
// 참고 : /** + enter 로 자동완성이 가능함

/**
 * Initializes the project
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns {boolean}
 * */

export function init(config) {
    return true;
}

/**
 * Exits the program
 * @param  {number} code
 * @returns {number}
 */
export function exit(code) {
    return code + 1;
}