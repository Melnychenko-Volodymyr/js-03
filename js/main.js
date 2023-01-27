let name = "", email = "", password = "";

let container = document.querySelector('.container');
let letReg = document.querySelector('.let_reg');
let greeting = document.querySelector('.greeting');
let krest = document.querySelector('.krest');
let warning = document.querySelector('.warning');

let btnReestr = document.querySelector('.btn_reestr');
let btnSubmit = document.querySelector('.btn_submit');
let inpName = document.querySelector('.inp_name');
let inpEmail = document.querySelector('.inp_email');
let inpPassword = document.querySelector('.inp_password');


function enterReg() {  
    container.style.display = "block";
    letReg.style.display = "none";
}

function closeReg() {  
    container.style.display = "none";
    letReg.style.display = "block";
}

function hideWarning() {
    warning.style.display = "none";
}

function submit() {
    name = inpName.value;
    email = inpEmail.value;
    password = inpPassword.value;
    if (name !='' && email.includes('@') && email.includes('.') && password !='') {
        container.style.display = "none";
        greeting.style.display = "block";
        greeting.innerHTML = "Вітаємо, " + name + ". Ви успішно пройшли реєстрацію на нашому сайті";
    } else {
        warning.style.display = "block";
        setTimeout(hideWarning, 2000);
    }
}

btnReestr.addEventListener('click', enterReg);
krest.addEventListener('click', closeReg);
btnSubmit.addEventListener('click', submit);




