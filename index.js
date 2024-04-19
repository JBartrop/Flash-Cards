var save = document.querySelector('.save');
var closenow = document.querySelector('.close');
var createbox = document.querySelector('.container')
var flashcards = document.querySelector('.flashcards')
var question = document.querySelector('.thequestion')
var answer = document .querySelector('.theanswer')
var deletecards = document.querySelector('.btn2');
var opencards = document.querySelector('.btn1');


//accessing and creating in local storage
let contentArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

//displaying previous cards in array
contentArray.forEach(divmaker);

//creating each card
function divmaker(text){
   var div = document.createElement('div')
   var h2 = document.createElement('h2')
   var p  = document.createElement('p');

   div.className = "flashcards2"

   h2.innerHTML = text.myquestion;
   p.innerHTML = text.myanswer;

   div.appendChild(h2);
   div.appendChild(p);
   // p.setAttribute('style', 'display: none;')
   flashcards.appendChild(div)

   //showing answers
   div.addEventListener('click', () => {
      p.classList.toggle('active');
   })

   console.log("created cards")
};

//saving the flash cards
save.addEventListener('click', () => {
   var flashcardsinfo ={
      myquestion : question.value,
      myanswer : answer.value
   }

   contentArray.push(flashcardsinfo)
   localStorage.setItem('items', JSON.stringify(contentArray))
   divmaker(contentArray[contentArray.length -1]);

   console.log(flashcardsinfo)
   
   answer.value ='';
   question.value ='';
})


//deleting the whole cards from local storage
deletecards.addEventListener('click', () => {
   localStorage.clear();
   flashcards.innerHTML = '';
   contentArray =[];
   console.log('worked cards deleted')
})

//opening the create cards box
opencards.addEventListener('click', () => {
   createbox.classList.remove('close');
})

//closing the create cards box
closenow.addEventListener('click', () => {
   createbox.classList.add('close');
})

// with no localstorage
// save.addEventListener('click', () => {
//    var div = document.createElement('div');
//    var h2 = document.createElement('h2');
//    var p = document.createElement('p');
//    div.className = "flashcards2";
//    h2.innerHTML = question.value
//    p.innerHTML = answer.value
//    div.appendChild(h2);
//    div.appendChild(p);
//    flashcards.appendChild(div)

//    question.value = '';
//    answer.value = '';
// });