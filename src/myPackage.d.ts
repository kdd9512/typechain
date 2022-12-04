// 어떤 dependency 등 을 import 할 때, 동명의 파일에 첨부된 메서드 등의 파일타입을 정의한다.
// TS 에게 제시하는 일종의 설명서 같은 것.
// ** 이 정의가 없다면 TS 는 해당 파일이 무엇인지 인식하지 못한다.

interface Config {
    url: string;
}

declare module "myPackage" {
    function init(config: Config) :boolean;
    function exit(code:number) :number;
}