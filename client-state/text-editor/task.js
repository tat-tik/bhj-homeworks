const editor = document.getElementById("editor");
const clear = document.getElementById("clear");

editor.addEventListener('input', () => {
	localStorage.setItem('text', editor.value);
});
editor.value = localStorage.getItem('text');

clear.addEventListener('click', () => {
	editor.value = '';
	localStorage.removeItem('text');
});