// event listener for form submission and preventing the page from reloading

   document.getElementById('contact').addEventListener('submit', eventFunction);

   // function 1 is called eventFunction because it encompasses the other functions and directs the function traffic
   function eventFunction(event) {
        // event listener for form submission and preventing the page from reloading
      event.preventDefault();
      // console.log('You submitted the form!');               testing
     
// calling the validateFunction to validate the form inputs
      validateFunction();
      function displayUserInfo() {
            var firstName = document.getElementById('firstName').value,
            lastName = document.getElementById('lastName').value,
            userEmail = document.getElementById('email').value,
            housingInfo = document.getElementById('housing').value,
            foodInfo = document.getElementById('food').value;
            
          console.log('Thank you for your order, ' + firstName + ' ' + lastName + '. Your email is ' + userEmail + '. Your housing preference is ' + housingInfo + '. Your food preference is ' + foodInfo + '.');
      }

    //   calling the displayUserInfo function to display the user info in the console
        displayUserInfo();
      if (validateFunction() === true) {
        // calling the calcFunction to calculate the total cost of the order
        calcFunction();
    
      }
    
  
} 


// function 2 is called validateFunction because it validates the form inputs
function validateFunction() {
    // if statement for validating if input values are empty by id
      var firstName = document.getElementById('firstName');
      var lastName = document.getElementById('lastName'); 
      
      if (firstName.value === '') {
           alert('Please fill in your first name');
        
          firstName.focus();
           return false;
       } else
       if (lastName.value === '') {
          alert('Please fill in your last name');
          lastName.focus();
         return false;
       } else
       if (firstName.value !== '' && lastName.value !== '') {
          return true;
       }
 
      
      }

// calcFunction is called within eventFunction to calculate the total cost of the order
// function 3 is called calcFunction because it calculates the total cost of the order, in this case it will add the values of the checked checkboxes and display the total cost in an alert 

const cart = [
    { name: 'shirt', price: 20 },
    { name: 'hoodie', price: 40 },
    { name: 'blanket', price: 50 }
];


// defining of calcFunction
function calcFunction() {

   var firstName = document.getElementById('firstName').value,
   lastName = document.getElementById('lastName').value,
   productShirt = document.getElementById('shirt').value,
   productHoodie = document.getElementById('hoodie').value,
   productBlanket = document.getElementById('blanket').value,
   shirtCheck = document.querySelector('[name=shirt]:checked'),
   hoodieCheck = document.querySelector('[name=hoodie]:checked'),
   blanketCheck = document.querySelector('[name=blanket]:checked');


   
// if statement for checking if any of the checkboxes are checked
// if none are checked, display an alert and return false
    if (shirtCheck === null && hoodieCheck === null && blanketCheck === null) {
         alert('Please choose at least one product');
         return false;
     } else 
     if (shirtCheck !== null || hoodieCheck !== null || blanketCheck !== null) {

         var totalCost = 0;

         if (shirtCheck !== null) {
            totalCost += parseInt(productShirt);
         }
         if (hoodieCheck !== null) {
            totalCost += parseInt(productHoodie);
         }
         if (blanketCheck !== null) {
            totalCost += parseInt(productBlanket);
         }
        //  testing to see user info and calcFunction are working
         console.log('Thank you for your order, ' + firstName + ' ' + lastName + '. Your total cost is $' + totalCost + '.');
     }
}

