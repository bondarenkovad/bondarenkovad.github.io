var link = document.querySelector('.login-link');
var popupLogin = document.querySelector('.modal-login');
var closeLogin = popupLogin.querySelector('.modal-close');
var login = popupLogin.querySelector('#user-login');

var isStorageSupport = true;
var storage = '';

try{
	storage = localStorage.getItem('login');
} catch (e) {
	isStorageSupport = false;
}


link.addEventListener('click', function (e) {
	e.preventDefault();
	popupLogin.classList.add('modal-show');
	if(storage){
		login.value = storage;
		password.focus();
	} else {
		login.focus();
	}
});


window.addEventListener('keydown', function (e) {
	if(e.keyCode === 27){

		if(popupLogin.classList.contains('modal-show')){
			e.preventDefault();
			popupLogin.classList.remove('modal-show');
			popupLogin.classList.remove('modal-error');
		}

		if(popupMap.classList.contains('modal-show')){
			e.preventDefault();
			popupMap.classList.remove('modal-show');
		}
	}
});

closeLogin.addEventListener('click', function (e) {
	e.preventDefault();
	popupLogin.classList.remove('modal-show');
	popupLogin.classList.remove('modal-error');
});




