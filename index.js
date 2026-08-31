// console.log("hey ...using Js development");
// console.log("Using js");

// let a=32;
// console.log("a="+a);
// //let is block scoped variable, it is only accessible inside the block where it is defined
// if(a>10){
//      let a=40;
//     console.log("a is inside block a="+a);
// }
// console.log("hi a is not inside block a="+a);

// function sum(a,b){
//     return a+b;
// }
// console.log("sum of 2 numbers is "+sum(230,30));

// const sum=(a,b)=>{
//     return a+b;
// }
// console.log("sum of 2 numbers is "+sum(12,30));

// const data=function(msg){
//     return "Hello, I m using JS"+msg;
// }
// console.log(data("and Node"));

//IIFE

// (()=>{console.log("Hey..using and CAlling by IIFE")})();

//callback
// function sum(a,b){
//     return a+b;
// }
// function sumWithMsg(clbk,msg){
//     const result = clbk(2,6);
//     console.log("Hey,Your result=" + result+"!! Well Done "+msg);

// }
// sumWithMsg(sum,"Rahul");

//function login(msg, error) {
//  if (error) {
//    console.log("Error is " + error);
//  } else {
//    console.log(msg);
//  }
//}

//function loginHandler(username, password, clbk) {
//  if (username == "Arj92799" && password == "123456") {
//    clbk("Login Success", null);
//  } else {
//    clbk(null, "Username or password is incorrect");
//  }
//}
//loginHandler("Arj92799", "123456", login);

//console.log("one")
//for(i=1;i<10;i++){
//    console.log("two")
//}
//console.log("three")

//console.log("one")
//setTimeout(()=>{
//    console.log("two")
//},1000)
//console.log("three")

// setTimeout(() => {
//   console.log("one");
//   setTimeout(() => {
//     console.log("two");
//     setTimeout(() => {
//       console.log("three");
//       setTimeout(() => {
//         console.log("four");
//         setTimeout(() => {
//           console.log("five");
//           setTimeout(() => {
//             console.log("six");
//             setTimeout(() => {
//               console.log("seven");
//             }, 1000);
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

//   const mypromise=new Promise((resolve,reject)=>{
//     const username="arathour07";
//     const password="123456";
//     if(username=="arathour07" && password=="123456"){
//         resolve("success");
//     }
//     else{
//         reject("username or password incorrect");
//     }
//   })

//   mypromise.then((msg)=>{
//     console.log(msg)
//   }).catch((msg)=>{
//     console.log(msg)
//   }).finally(()=>{
//     console.log("all done")
// })

// async function handleData(){
//     try{
//         console.log("hello")
//        const msg= await mypromise;
//        console.log (msg)
//     }
//     catch(err){
//         console.log("err")
//     }
//     finally{
//         console.log("All Done")
//     }
// }
// handleData();

// const mypromise = new Promise((resolve, reject) => {
//   const username = "arathour07";
//   const password = "123456";

//   if (username === "arathour07" && password === "123456") {
//     resolve("Login Successful");
//   } else {
//     reject("Username or Password Incorrect");
//   }
// });


// function orderReceived() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Order Received")
//     }, 2000); 
//   });
// }

// async function handleData() {
//   try {
//     console.log("Hello");

    
//     const loginMsg = await mypromise;
//     console.log(loginMsg);

    
//     const orderMsg = await orderReceived();
//     console.log(orderMsg);
//   } catch (err) {
//     console.log(err);
//   } finally {
//     console.log("All Done");
//   }
// }

// handleData();

//console.log("hey...using JS development environment")
//console.log("using JS")

// var a = 34;
// if (a<10){
//    var a=40;
//     console.log("Hi a inside the block:" + a);
// }
// console.log("hey... a is outside the block:" + a);

// function sum(a,b){
//     return a+b;
// }
// console.log(sum(230,30));

// const sum = (a,b) =>{return a+b};
// console.log(sum(12,30));

// const data=function(msg){
//     return "Hello,I am using JS"+msg;
// }
// console.log(data("and Node"));

// // IIFE
// (()=>{console.log("Hey..using and calling IIFE")})();


// callback

// 
// function login(msg,error){
//     if(error){
//         console.log("Error: "+error);
//     }
//     else{
//         console.log(msg)
//     }
    
// }

// function loginHandler(username,password,clbk){
//     if(username=="ptomer40" && password=="12345"){
//         clbk("Login Success",null);
//     }
//     else{
//         clbk(null,"username or password is incorrect");
//     }
// }
// loginHandler("ptomer40","12345",login); 


// console.log("one")
// for(i=1;i<100;i++){
// console.log("two")
// }
// console.log("Three")


// setTimeout(()=>{
//     console.log("one")
//     setTimeout(()=>{
//         console.log("two")
//         setTimeout(()=>{
//             console.log("three")
//             setTimeout(()=>{
//                 console.log("four")
//                 setTimeout(()=>{
//                 console.log("five")
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// },1000)

// const mypromise=new Promise((resolve ,reject)=>{
//     const username="ptomer40";
//     const password="123456";
//     if(username=="ptomer40" && password=="123456"){

//         resolve("success");
//     }else{
//         reject("username or password incorrect");
//     }
// })



// const myPromise = new Promise((resolve, reject) => {
//     const username = "ptomer40";
//     const password = "1234";

//     if (username === "ptomer40" && password === "1234") {
//         resolve("Login successful");
//     } else {
//         reject("Username or password is incorrect");
//     }
// });

// const profilePromise = new Promise((resolve) => {
//     resolve("Profile loaded");
// });

// myPromise
//     .then((message) => {
//         console.log(message);
//         return profilePromise;   // Return another Promise
//     })
//     .then((profile) => {
//         console.log(profile);
//     })
//     .catch((error) => {
//         console.log(error);
//     });
    

// // mypromise.then((msg)=>{
// //     console.log(msg)
// // }).catch((msg)=>{
// //     console.log(msg)
// // }).finally(()=>{
// //     console.log("All done")
// // })

// async function handleData(){
//     try{
//         const msg=await mypromise;
//         if (msg == "success") {
//             const orderstatus=await orderrecieve;
//             setTimeout(()=>{console.log(orderstatus)},1000)
        
            
//         }
//     }catch(err){
//         console.log(err)
//     }
//     finally{
//         console.log("All done ")
//     }
// }

// handleData();



// function orderrecieve(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("Order received");
//         },1000)
//     })
// }

// async function  overHandeler(){
//     try{
//     const status=await orderrecieve();
//     console.log(status)
//     }catch(err){
//         console.log(err)
//     }
// }

// orderrecieve().then((status)=>{
//     console.log(status)
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("All done")
// })

