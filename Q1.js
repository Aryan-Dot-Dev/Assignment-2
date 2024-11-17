import { Buffer } from 'buffer';

let buffer = Buffer.from([12, 45, 89, 56, 23, 78, 54, 32, 99]);

console.log("Length of the buffer:", buffer.length);

console.log("Value at index 6:", buffer[6]);
console.log("Value at index 8:", buffer[8]);

buffer[2] = 23;
console.log("Modified buffer:", buffer);