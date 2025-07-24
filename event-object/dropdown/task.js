const dropdownValue = document.querySelector(".dropdown__value");
const dropdownList = document.querySelector(".dropdown__list");
const dropdownItem = document.querySelectorAll(".dropdown__item");
const activeOrNotActive = () => {
	if (dropdownList.className === "dropdown__list") {
		dropdownList.className = "dropdown__list dropdown__list_active";
	} else {
		dropdownList.className = "dropdown__list";
	}
}
dropdownValue.addEventListener('click', activeOrNotActive);
for (let i = 0; i < dropdownItem.length; i++) {
	const changeTextContent = (event) => {
		dropdownValue.textContent = dropdownItem[i].textContent;
		dropdownList.className = "dropdown__list";
		event.preventDefault();
	}
	dropdownItem[i].addEventListener('click', changeTextContent)
}