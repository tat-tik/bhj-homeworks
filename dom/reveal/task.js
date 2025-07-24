const reveal = document.querySelectorAll(".reveal");
const isInViewport = (element) => {
	const viewportHeight = window.innerHeight;
	//const elementTop = element.getBoundingClientRect().top;
	//const elementBottom = element.getBoundingClientRect().bottom;
	const { top, bottom } = element.getBoundingClientRect();
	//return elementTop < viewportHeight && elementBottom > 0 ? true : false;
	return top < viewportHeight && bottom > 0 ? true : false;
};
for (let i = 0; i < reveal.length; i++) {
	const revealAppearance = () => {
		if (isInViewport(reveal[i])) {
			reveal[i].classList.add("reveal_active"); 
		} else {
			reveal[i].classList.remove("reveal_active"); 
		}
	}
	window.addEventListener('scroll', revealAppearance);
}