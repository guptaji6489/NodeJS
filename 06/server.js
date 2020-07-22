var buf = Buffer.alloc(10); // creating empty buffer
buf.write("harshit");
console.log(buf);
console.log(buf.toString());


var buf2 = Buffer.from("welcome");
console.log(buf2);
console.log(buf2.toJSON());

