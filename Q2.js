import { Buffer } from 'buffer';

let buffer100 = Buffer.alloc(100);

let str = "We are learning buffer module today and enjoying";
buffer100.write(str);

console.log("Buffer contents:", buffer100.toString());
