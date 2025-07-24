const rotator = document.querySelectorAll(".rotator__case");
const rotatorCase = Array.from(rotator);
let index = 0;
const rotatorChange = () => {
	if (rotatorCase[index].classList.contains("rotator__case_active")) {
		rotatorCase[index].classList.remove("rotator__case_active");
		index++;
		if (index === rotatorCase.length) {
			index = 0;
		}
	} 
	rotatorCase[index].classList.add("rotator__case_active");
}

setInterval(rotatorChange, 1000);