//requiring details
const info=require("fruits");
// printing 
let a=5;
for(let i=0;i<a;i++){
    console.log("hii",i);
}

//process argument
let args=process.argv;
for(let i=2; i<args.length;i++)
    {
    console.log("hello & welcome",args[i]);
    }
console.log(process.argv);
console.log(info);