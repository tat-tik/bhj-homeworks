const fontSize = document.querySelectorAll(".font-size");
const book = document.querySelector(".book");
for (let i = 0; i < fontSize.length; i++) {
	const changeFontSize = (event) => {
		for (let i = 0; i < fontSize.length; i++) {
			fontSize[i].classList.remove("font-size_active");
			if (fontSize[i].onclick) {
				fontSize[i].classList.add("font-size_active");
			}
		}
		if (fontSize[i].classList.contains("font-size_small")) {
			fontSize[i].classList.add("font-size_active");
			book.classList.remove("book_fs-big");
			book.classList.add("book_fs-small");
		} else if (fontSize[i].classList.contains("font-size_big")) {
			fontSize[i].classList.add("font-size_active");
			book.classList.remove("book_fs-small");
			book.classList.add("book_fs-big");
		} else {
			fontSize[i].classList.add("font-size_active");
			book.classList.remove("book_fs-small");
			book.classList.remove("book_fs-big");
		}
		event.preventDefault();
	}
	fontSize[i].addEventListener('click', changeFontSize);
}