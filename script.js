// Using the querySelector method got all the needed inputs
const fName=document.querySelector('#fname');
const lName=document.querySelector('#lname');
const pwd=document.querySelector('#pwd');
const conPwd=document.querySelector('#conPwd');

// Using the querySelector method got the sign up form
const form=document.querySelector('form');

// Adding an event listener to stop the form from submitting
// until all the needed inputs are verified
form.addEventListener('submit', event => {
    event.preventDefault();

    
});

