import { Buffer } from 'buffer';

let buffer1 = Buffer.from("JavaScript is easy");
let buffer2 = Buffer.from("We are learning and understanding");

let finalBuffer = Buffer.concat([buffer1, buffer2]);

console.log("Total length of the final buffer:", finalBuffer.length);
console.log("Contents of the final buffer:", finalBuffer.toString());

let slicedBuffer = finalBuffer.slice(14, 18);
console.log("Sliced value:", slicedBuffer.toString());
