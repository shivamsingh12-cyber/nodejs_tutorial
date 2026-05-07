import fs from "fs";
import os from "os";
import _ from "lodash";

console.log(os.userInfo());
const user=os.userInfo();
console.log(user.username);


// fs.appendFile("greeting.txt"," Hi "+user.username+"\n",()=>console.log("your file created"));
const getData=fs.readFile("greeting.txt",()=>console.log('we got the file!'));
console.log(getData);

const data=["Shivam","Shivam",7,8,7,8,9,true];
console.log(_.uniq(data));