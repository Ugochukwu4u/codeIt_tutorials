// const email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

let isButtonClicked = false;
let isConsent = null;

const validateForm =()=>{
    //clear error state
    const inputs = document.querySelectorAll('input');
    inputs.forEach((input)=> input.classList.remove('invalid'));
    const errors = document.querySelectorAll('.error');
    errors.forEach((error)=> error.textContent = '');
    const textarea = document.querySelector('textarea');
    textarea.classList.remove('invalid');

    let isValid = false;

    //firstname validation
    const firstname = document.querySelector('#firstname');
    const firstnameErr = document.querySelector('.first-name');

    if(firstname.value == ''){
       firstnameErr.textContent = 'This field is requried';
       firstname.classList.add('invalid');
       isValid = true;
    }
    if(/^\d/.test(firstname.value)){
        firstnameErr.textContent = "firstname should not start with a number";
        firstname.classList.add('invalid');
        isValid = true;
    }

    //lastname validation
    const lastname = document.querySelector('#lastname');
    const lastname_err = document.querySelector('.lastname-err');

    if(lastname.value == ''){
        lastname_err.textContent = "This field is required";
        lastname.classList.add('invalid');
        isValid = true;
    }
    if(/^\d/.test(lastname.value)){
        lastname.textContent = 'Lastname should not start with a number';
        lastname.classList.add('invalid');
        isValid = true;
    }

    //email validation
    const email = document.querySelector('#email');
    const email_err = document.querySelector('.email-err');
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(email.value.trim() == ''){
        email_err.textContent = "This field is required";
        email.classList.add('invalid');
        isValid = true;
    }
    if(!emailRegex.test(email.value.trim())){
        email_err.textContent = "Please enter a valid email address";
        email.classList.add('invalid');
        isValid = true;
    }

    //query selection validation
    if(!isButtonClicked){
        querry_error.textContent = 'Please select a query type';
        isValid = true;
    }

    //textarea validation
    const message = document.querySelector('#message');
    const message_err = document.querySelector('.message_err');

    if(message.value == ''){
        message_err.textContent = 'This field is required';
        message.classList.add('invalid');
        isValid = true;
    }

    //consent validation
    const consent_err = document.querySelector('.consent-err');
    if(!isConsent){
        consent_err.textContent = "To submit this form, please consent to being contacted";
        isValid = true;
    }

    if(!isValid){
        firstname.value = '';
        lastname.value = '';
        email.value = '';
        message.value = '';
        const success = document.querySelector('.success-state');
        success.style.transform = 'translateY(0)';
    }
}

document.getElementById('myForm').addEventListener('submit',(event)=>{
   event.preventDefault();
   validateForm();
});

const generalBtn = document.querySelector('#general');
const generalImg = document.querySelector('button > span > img');
const supportBtn = document.querySelector('#support');
const supportImg = document.querySelector('.support_btn');
const querry_error = document.querySelector('.query_err');

generalBtn.onclick =()=>{
    generalBtn.classList.add('active');
    generalImg.style.display = 'block';
    supportBtn.classList.remove('active');
    supportImg.style.display = 'none';
    isButtonClicked = true;
}

supportBtn.onclick =()=>{
    supportBtn.classList.add('active');
    supportImg.style.display = 'block';
    generalBtn.classList.remove('active');
    generalImg.style.display = 'none';
    isButtonClicked = true;
}
document.querySelector('.consent-form').addEventListener('click',()=>{
    const consent_img = document.querySelector('.consent-form > div > img');
    consent_img.style.display = 'block';
    isConsent = true;
})