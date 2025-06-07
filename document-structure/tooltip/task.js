const hasTooltips = Array.from(document.querySelectorAll(".has-tooltip"));
const tooltip = document.createElement("div");
tooltip.classList.add("tooltip");

for (let i = 0; i < hasTooltips.length; i++) {
    hasTooltips[i].insertAdjacentElement('afterEnd', tooltip);
    const onClick = (e) => {
        e.preventDefault();
        const top = e.target.getBoundingClientRect().top;
        const left = e.target.getBoundingClientRect().left;
        if (tooltip.innerText === e.target.title) {
            tooltip.classList.toggle("tooltip_active");
        } else {
            tooltip.classList.add("tooltip_active");
            tooltip.innerText = e.target.title;
            tooltip.style.top = `${top + 20}px`; 
            tooltip.style.left = `${left}px`;
        } 
    }
    hasTooltips[i].addEventListener('click', onClick);
}