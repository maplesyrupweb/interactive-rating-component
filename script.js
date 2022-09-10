// Get the container element
var btnContainer = document.getElementById("buttonDiv");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) { 
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}


// // Add active class to the current button

// //the div tht contains the 5 buttons
// var header = document.getElementById("buttonDiv");

// var btns = header.getElementsByClassName("btn");

// for (var i = 0; i < btns.length; i++) {

//   btns[i].addEventListener("click", function() 
//   {
//     var current = document.getElementsByClassName("active");

//     //replace " active" with empty string
//     current[0].className = current[0].className.replace(" active", "");
    
//     //add active to the current class name
//     this.className += " active";
//   });
// }

const btn_submit = document.querySelector('.btn-submit');

const review_card = document.querySelector('.review-card');

const thankyou_card = document.querySelector('.thank-you-card'); 

const rating_buttons = document.querySelectorAll('btn-rating');

btn_submit.addEventListener('click', onSubmit);

function onSubmit(){
  console.log('Submit Click');
  review_card.classList.add('hide');
  thankyou_card.classList.remove('hide');
}

console.log(rating_buttons);