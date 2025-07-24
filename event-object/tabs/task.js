const tab = Array.from(document.querySelectorAll(".tab"));
const tabContent = document.querySelectorAll(".tab__content");
for (let i = 0; i < tab.length; i++) {
	const onClick = () => {
		for (let i = 0; i < tab.length; i++) {
			tab[i].className = "tab";
			tabContent[i].className = "tab__content";
			if (tab[i].onclick) {
				tab[i].className = "tab tab_active";
				tabContent[i].className = "tab__content tab__content_active";
			}
		}
		if (tab[i].className === "tab") {
			tab[i].className = "tab tab_active";
			tabContent[i].className = "tab__content tab__content_active";
		}	
	}
	tab[i].addEventListener('click', onClick);
}