// Using the querySelector method got all the needed inputs
const fName=document.querySelector('#fname');
const lName=document.querySelector('#lname');
const pwd=document.querySelector('#pwd');
const conPwd=document.querySelector('#conPwd');

// Using the querySelector method got the sign up form
const form=document.querySelector('form');

// Using the querySelector method got the sign up btn
const signUpBtn=document.querySelector('#sign-up-btn');

// Array which will help us determine are all the values 
// inside the inputs good to be sent to the backend
const counterList=[0,0,0,0];

// Function used to test does the passed value equal 1
const listTest = arrItem => arrItem===1;

// Adding an event listener to stop the form from submitting
// until all the needed inputs are verified
form.addEventListener('input', event => {

    switch(event.target.id)
    {
        case 'fname':
            counterList[0]=firstNameVal(fName);
            break;
        case 'lname':
            counterList[1]=lastNameVal(lName);
            break;
        case 'pwd':
            counterList[2]=pwdVal(pwd);
            break;
        case 'conPwd':
            counterList[3]=conPwdVal(pwd,conPwd);
    }

    if(counterList.every(listTest)===true)
    {
        signUpBtn.disabled=false;
    }
    else
    {
        signUpBtn.disabled=true;
    }
});