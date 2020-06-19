const fs=require('fs');
const path=require('path');
const solc=require('solc');


var fpath=path.resolve(__dirname,'contract','sample.sol');

var sourceCode=fs.readFileSync(fpath,'utf8');


var compilerOp=solc.compile(sourceCode,1).contracts[':Test'];

module.exports=compilerOp;