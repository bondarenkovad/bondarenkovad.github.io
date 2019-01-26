var link = document.querySelector('.login-link');
var mapLink = document.querySelector('.contacts-button-map');
var popupMap = document.querySelector('.modal-map');
var popupLogin = document.querySelector('.modal-login');
var closeLogin = popupLogin.querySelector('.modal-close');
var closeMap = popupMap.querySelector('.modal-close');
var login = popupLogin.querySelector('#user-login');
var password = popupLogin.querySelector('#user-password');
var form = popupLogin.querySelector('form');

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

mapLink.addEventListener('click', function (e) {
	e.preventDefault();
	popupMap.classList.add('modal-show');
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

closeMap.addEventListener('click', function (e) {
	e.preventDefault();
	popupMap.classList.remove('modal-show');
});

form.addEventListener('submit', function (e) {
	if(!login.value || !password.value){
		e.preventDefault();
		popupLogin.classList.remove('modal-error');
		popupLogin.offsetWidth = popupLogin.offsetWidth;
		popupLogin.classList.add('modal-error');

	} else {
		if(isStorageSupport){
			localStorage.setItem('login', login.value);
		}
	}
});
