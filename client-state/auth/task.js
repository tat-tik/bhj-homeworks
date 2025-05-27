const formDiv = document.getElementById('signin');
const signinForm = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const signinBtn = document.querySelector('.btn');
const userId = document.getElementById('user_id');
const signoutButton = document.getElementById('signout__btn');

signinBtn.addEventListener('click', sendForm);

function sendForm(e) {

    e.preventDefault();

    const form = document.getElementById('signin__form');
    const formData = new FormData(form);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.addEventListener('load', showData);
    xhr.send(formData);
    xhr.responseType = 'json';

    function showData() {
            const response = xhr.response;
            if (response.success) {
                localStorage.userId = response.user_id;
                formDiv.classList.remove('signin_active');
                welcome.classList.add('welcome_active');
                userId.innerText = response.user_id;           
            }
            else {
                alert('Неверный логин/пароль');
            }
        }
    }

    signinForm.reset();


const storageId = localStorage.getItem('userId');
        if (storageId){
            formDiv.classList.remove('signin_active');
            welcome.classList.add('welcome_active');
            userId.innerText = localStorage.userId;
        }


signoutButton.addEventListener('click', () => {
  delete localStorage.userId;
  welcome.classList.remove('welcome_active'); 
  signin.classList.add('signin_active');  
});
