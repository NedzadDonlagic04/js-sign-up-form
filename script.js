//Defining an object which will store all the type of errors
//we expect to occur during the sign up process
const errors = {
    'fname':[],
    'lname':[],
    'pwd':[],
    'conPwd':[]
};

//Gathering all the necessary input tags
const inputTags=[];
for(const error in errors)
{
    const input=document.querySelector(`input[name='${error}']`);
    inputTags.push(input);
}

