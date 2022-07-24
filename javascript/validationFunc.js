/* 
Function lengthValidation is used to check does
a certain number fall into the given range
In my case it's used to check does the input value
of the name,surname,password etc fit into the given
size
If the passed length fits in the range it returns
true but if it doesn't fit it returns false
*/

const lengthValidation = (length,min,max) => {
    if(min<1 || max<1)
    {
        return false;
    }
    else if(length>=min && length<=max)
    {
        return true;
    }
    return false;
}

/*
Function firstNameVal is used to validate
the entered name,it will check does the name fit
into a given range,the characters used in it containing
only characters from the english alphabet,and display the
correct error message under the name input
If the validation is good it returns 1 if it isn't it 
returns 0
*/

const firstNameVal = fName => {
    const min=1,
          max=25,
          regexp=new RegExp(/^[a-zA-Z]+$/),
          value=fName.value;
    const div=fName.closest('div');
    const p=div.querySelector('p');

    p.innerText='';

    if(lengthValidation(value.length,min,max)===false)
    {
        p.innerText+=`Name length has to be between ${min} and ${max}.`;
    }
    if(regexp.test(value)===false)
    {
        p.innerText+='Name contains invalid characters.';
    }

    if(p.innerText==='')
    {
        return 1;
    }
    return 0;
}

/*
Function evaluateNames is used to take a string which is
expected to have multiple spaces and see do the value in 
between those spaces match the passed regex,if the values
pass the test it returns false if not returns true
*/

const evaluateLNames = (lNames,regexp) => {
    for(const lName of lNames)
    {
        if(regexp.test(lName)===false)
        {
            return true;
        }
    }
    return false;
}

/*
Function lastNameVal is used to validate the entered 
surname,it will check does the surname fit into a given 
range,the characters used in it containing only characters 
from the english alphabet,and display the correct error 
message under the name input.If the validation is good it 
returns 1 if it isn't it returns 0
*/

const lastNameVal = lName => {
    const min=1,
          max=30,
          regexp=new RegExp(/^[a-zA-Z]+$/),
          value=lName.value;
    const div=lName.closest('div');
    const p=div.querySelector('p');

    p.innerText='';

    if(lengthValidation(value.length,min,max)===false)
    {
        p.innerText+=`Surname length has to be between ${min} and ${max}.`;
    }

    const valueSplit=value.split(' ');

    if(valueSplit.length>2 || evaluateLNames(valueSplit,regexp))
    {
        p.innerText+=`Surname contains invalid characters.`;
    }

    if(p.innerText==='')
    {
        return 1;
    }
    return 0;
}

/*
Function pwdVal is used to validate the entered password,
it will check does the password fit into a given range,
the characters used in it containing only characters from 
the english alphabet,numbers from 0-9 and the _ character,
and display the correct error message under the password 
input.If the validation is good it returns 1 if it isn't it 
returns 0
*/

const pwdVal = pwd => {
    const min=8,
    max=20,
    regexp=new RegExp(/^[a-zA-Z0-9_]+$/),
    value=pwd.value;
    const div=pwd.closest('div');
    const p=div.querySelector('p');

    p.innerText='';

    if(lengthValidation(value.length,min,max)===false)
    {
        p.innerText+=`Password length has to be between ${min} and ${max}.`;
    }
    if(regexp.test(value)===false)
    {
        p.innerText+='Password contains invalid characters.';
    }

    if(p.innerText==='')
    {
        return 1;
    }
    return 0;
}

/*
Function conPwdVal is used to validate the confirmation
of the previously entered password,it checks everything 
the pwdVal function does but adds on the check for the 
passwords matching,if the validation is successful returns
1 and if it isn't returns 0
*/

const conPwdVal = (pwd,conPwd) => {
    const min=8,
    max=20,
    regexp=new RegExp(/^[a-zA-Z0-9_]+$/),
    value=conPwd.value;
    const div=conPwd.closest('div');
    const p=div.querySelector('p');

    p.innerText='';

    const cond1=lengthValidation(value.length,min,max)===false;
    const cond2=regexp.test(value)===false;
    const cond3=value!==pwd.value;

    if(cond1 || cond2 || cond3)
    {
        p.innerText+="Passwords don't match";
    }

    if(p.innerText==='')
    {
        return 1;
    }
    return 0;
}