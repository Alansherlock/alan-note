const protobuf = require('protocol-buffers');
const fs = require('fs');
const schema = protobuf(fs.readFileSync(__dirname+'/test.proto','utf-8'));
console.log(schema);
