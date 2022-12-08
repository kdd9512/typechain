// import 하는것 까진 좋은데 그냥 import 하면 TS 가 이게 뭔질 알아먹질 못한다...
// 그러므로 TS 에게 해당 파일의 메서드 정의를 설명하기 위해 반드시 정의파일을 만들어야 하는데,
// 해당 파일은 "파일명.d.ts" 확장자를 가진다.
// import {init, exit} from "myPackage";

// 직접 JS 파일을 import 하는 방법도 있다. 이 경우, js 파일 내부에서 해야할 작업이 있으므로 myPackage.js 를 참고.
// import {init, exit} from "./myPackage";

// * as : 해당 import 의 모든 구성요소를 불러온다.

// TS 가 어떤 파일 을 import 하여 사용하려면 그 파일이 가지고 있는 메서드들의
// param, attributes, return 값에 대한 타입 설명이 필요하다.
// 하지만 import 하는 파일 자체가 거대하다면 이를 하나 하나 설명하는 것은 매우 비효율적인 일이다.
// 그러므로, 보통은 직접 d.ts 파일을 만들어 설정하기 보다는 DefinitelyTyped 라는 github repository 를 이용한다.
// 해당 사이트에서 원하는 npm 파일을 찾아 복붙하여 만들수도 있겠으나, 매우 번거로우니
// 일반적으로 이하의 명령어를 통해 해당 파일을 다운로드 하여 사용하는 방법을 사용한다.

// npm i -D @types/"해당 dependency 를 설명한 d.ts 가 담긴 repository 경로"
// 이 예제에서 사용하는 crypto 는 nodejs 에 있는 class 이므로 DefinitelyTyped 내 해당 경로인 node 를 선택한다.

import crypto from "crypto";

// 블록체인의 기초를 학습.
interface BlockShape {
    hash: string,
    prevHash: string,
    height: number,
    data: string
}

class Block implements BlockShape {
    public hash: string;
    constructor(
        public prevHash: string,
        public height: number,
        public data: string,
    ) {
        this.hash = Block.calculateHash(prevHash, height, data);
    }
    static calculateHash(prevHash:string, height:number, data:string) {
        const toHash = `${prevHash}${height}${data}`;
        return crypto.createHash("sha256").update(toHash).digest("hex");
    }

}

class BlockChain {
    private blocks : Block[];
    constructor() {
        this.blocks = [];
    }
    private getPrevHash(){
        if(this.blocks.length === 0) return "";
        return this.blocks[this.blocks.length -1].hash;
    }
    public addBlock(data:string) {
        const newBlock = new Block(
            this.getPrevHash(),
            this.blocks.length +1,
            data);
        this.blocks.push(newBlock);
    }
    public getBlocks() {
        return this.blocks;
    }
}


const blockchain = new BlockChain();

blockchain.addBlock("1st")
blockchain.addBlock("2nd")
blockchain.addBlock("3rd")

console.log(blockchain.getBlocks());