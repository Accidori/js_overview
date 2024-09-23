// // const firstName = 'RA';
// // let age = 18;

// // //age++
// // //age--

// // //if age is greater than 20, and less than 50, print out console log "you are young"

// // /*CONDITIONALS*/
// // //in one line
// // age > 20 && age < 50 ? console.log('you are old') : console.log('you are young');

// // // in a longer way
// // if (age > 20 && age < 50){
// //     console.log('you are old')
// //   }else  {
// //     console.log('you are young')
// // }

// // /*ARRAYS*/ 

// // const fruit = ['apples', 'orange', 'kiwi']

// // // fruit pop();
// // // console






// // console.log(fruit[1])
// // console.log('test');

// // let data = ['person', 44, 'place']

// // console.log(data[1])

// // data[1]++;

// // console.log(data[1])

// // // loops

// // for (let count = 0; count < 11; count++) {
// //     console.log(count);
    
// // }
// // // let array = [at1,at4]

// // const names = ['Izzy','Matt','City'];

// // function printNames(){
// //     console.log(names);
// // }

// // function add(num1, num2){
// //    console.log(num1 + num2);

// // }

// // add(10, 5);


// /*OBJECTS*/


// const user = {
//   name: "me",
//   age: 18,
//   phone: "444-444-4444",
//   address:"somewhere in nevada",
//   info:{
//     location: "another place",
//     hobbies: ['pickleball','fishing']
//   },
//   printAge: function () {
//     console.log(this.age);
//   },
//   haveBirthday: function () {
//     this.age++;
//     console.log('happy birthday');
//   },
//   addHobby: function (hobby) {
//     this.info.hobbies.push(hobby);
//   },
//   printHobbies: function () {
//       console.log(this.info.hobbies);
//   }

// }

// //this means the object that the function is inside of

// user.addHobby('drawing');
// user.printHobbies();

// // console.log(user.info.hobbies[1]);

// // user.haveBirthday();

// //functions inside of objects are called methods
// //functions outside of objects are called functions
// //methods called outside shoulde be called by object.method()


// //adding css
// header.classList.add('crazy');
// header.style.textDecoration= 'underline';


// //image
// // image.setAttribute('src', 'https://t4.ftcdn.net/jpg/02/90/85/59/360_F_290855974_8RdZOzDTWiI0lCNBGuQV9KLJ3Od6SG2Q.jpg');


// //idek really
// noteOutput.insertAdjacentHTML(`beforeend`, `
//     <article>
//     <h3>Some note</h3>
//     <p>added on</p>
//   </article>
// `);



// DOCUMENT QUERIES 


//this here fetches anypart of html items and makes them available to use for interactiveness
const header = document.querySelector('h1');
const paragraph = document.querySelector('p:nth-child(2)');
const image = document.querySelector('main-image');
const noteOutput = document.querySelector('.output');
const timerDisplay = document.querySelector('#time');
const timerBtn = document.querySelector('#start-btn');
const resetBtn = document.querySelector('#reset-btn');










//timer
let count = 10;
let started = false;
let timer;

function resetTimer(eventObj){
  clearInterval(timer);
  timerDisplay.innerText = 'Time: 10';
  count = 10;
  started = false;
  
}


function startTimer(eventObj){
  if (!started){
      timer = setInterval(function () {
      count--;
      timerDisplay.innerText = 'Time: ' + count;

      if(count <= 0){
        clearInterval(timer);
      }
    }, 1000);
    
    started=true;
  }
}

function getKeyPress(eventObject) {
  //
  if (eventObject.keyCode === 83){
    startTimer();
  } else if (eventObject.keyCode === 82){
    resetTimer();
  }
}

timerBtn.addEventListener('click', startTimer);

resetBtn.addEventListener('click', resetTimer);

document.addEventListener('keydown', getKeyPress);

// const data = {
//   name:'name'
// }
