import { Buffer } from 'buffer';

function findSubstring(buffer, substring) {
    let str = buffer.toString();
    let index = str.indexOf(substring);
    return index !== -1 ? index : -1;
  }
  
  let examBuffer = Buffer.from("Our exams are coming and we are preparing for it");
  
  let index = findSubstring(examBuffer, "coming");
  console.log("Starting index of 'coming':", index);
  