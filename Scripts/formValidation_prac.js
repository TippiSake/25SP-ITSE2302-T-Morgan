// submit.addEventListener("click", submitFunction);

// function submitFunction() {
//     alert("The form was submitted successfully");
// }

// const form = document.querySelector('form');

//  form.addEventListener('submit', function(event) {
//     event.preventDefault();
//     alert("Your form was submitted successfully!");
//  });

 






// practice from 5.2 videos w/Joe, for eventlisteners and form events
// ?this is for adding a function for estimating a total when the form is submitted

// (function() {

// document.getElementById('cart-hplus').addEventListener('submit', estimateTotal);

// function estimateTotal(event) {
//    event.preventDefault();

//   var state = document.getElementById('s-state');

// // if statement for validating if input values are empty by id
//    if (state.value === '') {
//        alert('Please choose your shipping state.');

//       state.focus();
//    }
// }
// })();


// event listener for form submission and preventing the page from reloading
   document.getElementById('contact').addEventListener('submit', eventFunction);

   // function 1 is called exentFunction because it encompasses the other functions and directs the function traffic
   function eventFunction(event) {
      event.preventDefault();
      // console.log('You submitted the form!');               testing
      validateFunction();
      calcFunction();
} 

  
     
      // var firstName = document.getElementById('firstName'),
      // lastName = document.getElementById('lastName').value,
      // // productShirt = document.getElementById('shirt').value,
      // // productHoodie = document.getElementById('hoodie').value,
      // // productBlanket = document.getElementById('blanket').value,
      // // userEmail = document.getElementById('email').value,
      // // housingInfo = document.getElementById('housing').value,
      // // foodInfo = document.getElementById('food').value,
      // shirtCheck = document.querySelector('[name=shirt]:checked').value,
      // hoodieCheck = document.querySelector('[name=hoodie]:checked').value,
      // blanketCheck = document.querySelector('[name=blanket]:checked').value;

   
    
    
    
     function validateFunction() {
   // if statement for validating if input values are empty by id
     var firstName = document.getElementById('firstName');
     var lastName = document.getElementById('lastName'); 
     
     if (firstName.value === '') {
          alert('Please fill in your first name');
     
         firstName.focus();
   
      } else
      if (lastName.value === '') {
         alert('Please fill in your last name');
         lastName.focus();
      
      }

     
     }

   // You  need to add a variable that looks for the boxes that are checked: example video "Joe Chellam : Javascript for Web Designers: Retrieve all the data from the cart: min mark 3:03
   // "EXAMPLE: var checkedBoxes = document.querySelectorAll('[type="checkbox"]:checked').value;


   
   // function 3 is for calculating the total of checked items and calling stored variables from products
   
   
   // function for calculating total of checked items and calling stored variables from products
      // var checkedShirt = shirt.value;
      // var checkedShirt = parseInt(checkedShirt);
      // var checkedHoodie = hoodie.value;
      // var checkedHoodie = parseInt(checkedHoodie);
      // var checkedBlanket = blanket.value;
      // var checkedBlanket = parseInt(checkedBlanket);
   //   function calcFunction() {   
   

   //    if (shirt.checked === true) {
   //       var checkedShirt = shirt.value;
   //       var checkedShirt = parseInt(checkedShirt);
       
   //     } else 
   //     if (hoodie.checked === true) {
   //       var checkedHoodie = hoodie.value;
   //       var checkedHoodie = parseInt(checkedHoodie);
        

   //     } else 
   //    if (blanket.checked === true) {
   //       var checkedBlanket = blanket.value;
   //       var checkedBlanket = parseInt(checkedBlanket);
      
   //  } 
      
   //    var checkedSum = checkedShirt + checkedHoodie + checkedBlanket;
   //    console.log(checkedSum);
     
   //  } 
    
   

 
//  var checkedShirt = shirt.value;
//       var checkedShirt = parseInt(checkedShirt);
//       var checkedHoodie = hoodie.value;
//       var checkedHoodie = parseInt(checkedHoodie);
//       var checkedBlanket = blanket.value;
//       var checkedBlanket = parseInt(checkedBlanket);
//       checkedSum = 



   //  practice function for checking if the checkboxes are checked 
   //  function validateFunction() {
   //    if (shirt.checked === true) {
   //          console.log("You checked the shirt box.");
   //    }
   //    // else (shirt.checked === false)
   //    // console.log("not checked");

   //    else if (hoodie.checked === true) {
   //       console.log("You checked the hoodie box.")
   //    }
   //    else if (blanket.checked === true) {
   //       console.log("You checked the blanket box.")
   //    }
   // }
   

// var caughtValue = checkFunction()
//       var productShirt = document.getElementById('shirt').value,
//       productHoodie = document.getElementById('hoodie').value,
//       productBlanket = document.getElementById('blanket').value,
//       shirtCheck = document.querySelector('[name=shirt]:checked').value,
//       hoodieCheck = document.querySelector('[name=hoodie]:checked').value,
//       blanketCheck = document.querySelector('[name=blanket]:checked').value;




// mastery assessment practice here
// // Testing: call the displayListener, or Function 1, function 
// displayDeets();

// // Calling the Validation function
// validateInput();

// // Calling the calculateItems function
// calculateItems();



// checked box practice statement
//  if (shirt.checked === true) {
//         var checkedShirt = shirt.checked.value;
//          console.log("You checked the shirt box.");
//          return true;
//       } else 
//       if (shirt.checked === false) {
//          return false;

//    }
//       if (hoodie.checked === true) {
//         var checkedHoodie = hoodie.checked.value;
//          console.log("You checked the shirt box.");
//          return true;
//       } else 
//       if (hoodie.checked === false){
//          return false;
//    }
   
//    if (blanket.checked === true) {
//       var checkedBlanket = 
//       console.log("You checked the blanket box.");
      
//    } else 
//    if (blanket.checked === false){
//    console.log("");
//    }





// FINAL M5 total cart practice code
// function to calculate the total cost of the order
// function calculateCartTotal(cart) {
//     return cart.reduce((total, item) => total + item.price, 0);
// }

// call the calcFunction and display total to browser
// console.log(`Total: $${calcFunction(cart)}`);