const modal = document.getElementById("subscribe-modal");
const modalClose = document.querySelector(".modal__close"); 

function setCookie(key, value) {
    document.cookie = key + '=' + encodeURIComponent(value);
}

function getCookie(key) {
    const cookies = document.cookie.split('; ');
    const cookie = cookies.find((c) => c.startsWith(key + '='));
    return cookie ? decodeURIComponent(cookie.substr(key.length + 1)) : null;
}

modal.className = "modal modal_active";
modalClose.onclick = function() {
	modal.className = "modal";
	setCookie('popup', 'closed');
}

window.onload = function() {
	let result = getCookie('popup');
	if (result === 'closed') {
		modal.className = "modal";
	} else {
		modal.className = "modal modal_active";
	}
}