"use strict";
// import 하는것 까진 좋은데 그냥 import 하면 TS 가 이게 뭔질 알아먹질 못한다...
// 그러므로 TS 에게 해당 파일의 메서드 정의를 설명하기 위해 반드시 정의파일을 만들어야 하는데,
// 해당 파일은 "파일명.d.ts" 확장자를 가진다.
// import {init, exit} from "myPackage";
// 직접 JS 파일을 import 하는 방법도 있다. 이 경우, js 파일 내부에서 해야할 작업이 있으므로 myPackage.js 를 참고.
// import {init, exit} from "./myPackage";
console.log("success!!");
