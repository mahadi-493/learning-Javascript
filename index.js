// let username;

// username=window.prompt("what is you name?");
// document.getElementById("header").textContent=username;
// console.log(`My name is ${username}`);


// document.getElementById("button").onclick=function(){
//     username=document.getElementById("text").value;
//     document.getElementById("header").textContent=username;
// }

//type conversion string,boolean
// let age=window.prompt("what is your age?");
// age=Number(age);
// age+=1;
// document.getElementById("header").textContent=`I am ${age} years old.${typeof age}`;

// const = a variable can't be changed
// for use math operations we use Math.What we wnat to do.

//Random Number.
// let randomNum=Math.random()*(100-50);
// randomNum=Math.floor(randomNum)+50;
// document.getElementById("header").textContent=randomNum;
// const rollbtn=document.getElementById("button");
// const mylabel1=document.getElementById("label1");
// const mylabel2=document.getElementById("label2");
// const mylabel3=document.getElementById("label3");

// let randomnumber;
// let randomnumber1;
// let randomnumber2;
// let randomnumber3;

// rollbtn.onclick=function(){
// randomnumber1=Math.random()*5;
// randomnumber2=Math.random()*5;
// randomnumber3=Math.random()*5;
// randomnumber1=Math.ceil(randomnumber1)+1;
// randomnumber2=Math.ceil(randomnumber2)+1;
// randomnumber3=Math.ceil(randomnumber3)+1;
// mylabel1.textContent=randomnumber1;
// mylabel2.textContent=randomnumber2;
// mylabel3.textContent=randomnumber3;
// }

// let age=18;
// let hasLicence=true;
// if(age>=18 && hasLicence==true){
//   console.log(`you are enough to drive`);
//   if(hasLicence){
//     console.log(`you are ready to drive`);
//   }
//   else{
//     console.log(`you are not ready to drive`);
//   }
// }
// else{
//     console.log(`you are not old enough to drive`);
// }
// const outPut=document.getElementById("header");
// const inPut=document.getElementById("textInput");
// const submitBtn=document.getElementById("inputBtn");
// let age;
// let hasLicence=true;

// submitBtn.onclick=function(){
//    age=Number(inPut.value) ;
//    if(age>=18){
//     outPut.textContent=`You are old enough to get a licence 😎`;
//    }
//    else{
//     outPut.textContent=`You are not old enough to get a licence`;
//    }
// }

// const subscribeBox=document.getElementById("subscribeBox");
// const visaBtn=document.getElementById("visaBtn");
// const masterBtn=document.getElementById("masterBtn");
// const paypalBtn=document.getElementById("paypalBtn");
// const inputBtn=document.getElementById("inputBtn");
// const output1=document.getElementById("output1");
// const output2=document.getElementById("output2");

// inputBtn.onclick=function(){
//     if(subscribeBox.checked){
//        if(visaBtn.checked){
//         output1.textContent=`You are Subscribed😎`;
//         output2.textContent=`Your visa card payment is succesfull,thank you😍`;
//         } 
//       else if(masterBtn.checked){
//         output1.textContent=`You are Subscribed😎`;
//         output2.textContent=`Your Mastercard payment is succesfull,thank you😍`;
//       }
//       else if(paypalBtn.checked){
//         output1.textContent=`You are Subscribed😎`;
//         output2.textContent=`Your PayPal payment is succesfull,thank you😍`;
//       }
//        else{
//         output1.textContent=`You are Subscribed😎`;
//         output2.textContent=`Your payment is unseccesfull! Select a payment method.`;
//        }
//     }
//     else{
//         output1.textContent=`You are not Subscribed🙄`;
//     }
// }

// ternary 
// const header=document.getElementById("header");
// let age=19;
// let message=age>=18 ? `You are an adult`: `You are not an Adult`;
// header.textContent=message;

//  strng methods
 // let username=`mahadi`;
// console.log(username.replaceAll(`a`,`e`));
// let phoneNumber=`123-456-789`;
// console.log(phoneNumber.padStart(16,`+880-`).replaceAll(`-`,``).startsWith(`+880`));
// const fullName=`Mahadi Hasan`;
// let firstName=fullName.slice(0,6);
// let lastName=fullName.slice(7);
// console.log(firstName,lastName);

// let firstname=window.prompt(`Enter your firstname`);
// let lastname=window.prompt(`enter your last name`);
// console.log(firstname);
// console.log(lastname);
// const username=firstname.trim().slice(0,1).toUpperCase()+firstname.slice(1)+` `+lastname.slice(0,1).toUpperCase()+lastname.slice(1);
// console.log(username);

//logical operations
// &&,||,!;

// string equality
// = assignment
// ==comapre
// === compare if values and datatype are equal
// !== strict inequality 
// != inequality

//loop
//functions
// function happyBirthday(username,age){
//     window.alert(`Happy Birthday ${username}!!!`);
//     window.alert(`you are ${age} years old!!!`);
// }
// happyBirthday(`Mahadi`,22);

//variable scope
//Temperature converter

// const textBox=document.getElementById("textBox");
// const tOf=document.getElementById("tOf");
// const tOc=document.getElementById("tOc");
// const result=document.getElementById("result");
// let temp;

// function convert(){
//   if(tOf.checked){
//      temp=Number(textBox.value);
//      temp=temp*9/5+32;
//      result.textContent=temp.toFixed(2)+" °F";
//   }
//   else if(tOc.checked){
//      temp=Number(textBox.value);
//      temp=(temp-32)*(5/9);
//      result.textContent=temp.toFixed(2)+" °C";
//   }
//   else{
//     result.textContent=" Select a unit";
//   }
// }

//array
//spread operator =... its allows an iterable such as an array or string to be expanded into separate elements;
//rest =... it bundles seperate elements in an array
// function openFridge(...foods){
//     console.log(...foods);

// }

// let food1=`pizza`;
// let food2=`burger`;
// let food3=`hotdog`;
// let food4=`sushi`;

// openFridge(food1,food2,food3,food4);

// function sum(...numbers){
//     let result=0;
//     for(let number of numbers){
//         result+=number;
//     }
//     return result;
// }

// function getAverage(...numbers){
//     let result=0;
//     for(let number of numbers){
//         result+=number;
//     }
//     return result/numbers.length;
// }
// const total=getAverage(75,100,85,90,50);
// console.log(total);
// function combineStrings(...strings){
//    console.log(...strings);
//    console.log(strings.join(` `));
// }

// combineStrings(`Mr`,`Mahadi`,`Hasan`);

//dice roller

// function rollDice(){
//     const numofDice=document.getElementById("numofDice").value;
//     const diceResult=document.getElementById("diceResult");
//     const diceImages=document.getElementById("diceImages");
//     const values=[];
//     const images=[];
    
    // for(let i=0;i<numofDice;i++){
    //     const value=Math.floor(Math.random()*6)+1;
    //     values.push(value);
    //     images.push(`<img src="dice_images/${value}.png">`);
    // }
    
    // diceResult.textContent=`dice:${values.join(', ')}`;
    // diceImages.innerHTML=images.join(``);

// }

// arrow function =>

// const hello = function(){
//     console.log("hello");
// }
// hello();

// const hello =(name,age)=> {console.log(`Hello ${name}`)
//                         console.log(`You are ${age} years old!`)};
// hello(`Mahadi`,22);

// setTimeout(()=>{
//     console.log(`Hello`);
// },3000);
// const numbers =[1,2,3,4,5,6];

// const squares= numbers.map((element)=> Math.pow(element,2));
// const cubes= numbers.map((element)=> Math.pow(element,3));
// const evenNum=numbers.filter((element)=> element%2===0 );
// const total=numbers.reduce((element,accumalator)=> accumalator+element );
// console.log(total);

// object=A collection of related properties and/or methods
// object={key:value,
//functions()};

// const person1={
//     firstname:"Mahadi",
//     lastname: "Hasan",
//     age:22,
//     isEmployed:true,
//     saySomething: function(){
//         console.log(`Hello`)
//     },
//     eat: ()=> console.log(`I am eating rice`),
// }
// const person2={
//     firstname:"Petrick",
//     lastname: "Star",
//     age:42,
//     isEmployed:false,
//     eat: ()=> console.log(`I am eating burger`),
// }
// person1.saySomething();
// person1.eat();
// person2.eat();
// console.log(person1.firstname);
// console.log(person1.lastname);
// console.log(person1.age);
// console.log(person1.isEmployed);
// console.log(person2.firstname);
// console.log(person2.lastname);
// console.log(person2.age);
// console.log(person2.isEmployed);

// this
// constructor
// function Car(make,model,year,color){
//     this.make=make,
//     this.model=model,
//     this.year=year,
//     this.color=color,
//     this.drive=()=>console.log(`This is a ${model} car!`)
// }

// const car1=new Car(`Ford`,`mustage`,2024,`red`);
// car1.drive();

//  class Product{
//     constructor(name,price){
//         this.name=name,
//         this.price=price
//     }

//     displayProduct=()=> {console.log(`Name: ${this.name}`);
//                          console.log(`Price: ${this.price}`);}

//     calculateBill=(saleTax)=> {return this.price+(this.price*saleTax);}
//  }
//  const product1=new Product(`Soap`,45);
//  const product2=new Product(`Salt`,55);
//  const product3=new Product(`Rice`,65);
// product2.displayProduct();
// const saleTax=0.1;
// const total=product2.calculateBill(saleTax);
// console.log(total);
// inheritance
// class Animal{
//     alive=true;
//     eat(){
//         console.log(`This ${this.name} is eating`);
//     }
//     sleep(){
//         console.log(`This ${this.name} is sleeping`);
//     }
// }

// class Rabbit extends Animal{
//     name=`nafiz`;
// }
// const nafiz=new Rabbit();
// console.log(nafiz.alive);
// nafiz.eat();

//super 
 
