const links = document.getElementsByClassName('has-tooltip');

for (const link of links) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.innerText = link.title;    
    link.insertAdjacentElement('afterEnd', tooltip);

    link.addEventListener('click', function(e) {
        e.preventDefault();
        if (tooltip.classList.contains('tooltip_active')) {
            tooltip.classList.remove('tooltip_active');
            return;
          }
    const prevTooltip = document.querySelector('.tooltip_active');
    if (prevTooltip)
      prevTooltip.classList.remove('tooltip_active');
    link.removeAttribute("title");
        
    tooltip.classList.add('tooltip_active');
    const too = tooltip.getBoundingClientRect();
    const lin = link.getBoundingClientRect();
    switch (e.target.tooltip) {
        case 'left':
          tooltip.style.top = lin.top + 'px';
          tooltip.style.left = (lin.left + too.left - too.right) + 'px';
          break;
        case 'right':
          tooltip.style.top = lin.top + 'px';
          tooltip.style.left = lin.right + 'px';        
          break;
        case 'top':
          tooltip.style.top = (lin.top + too.top - too.bottom) + 'px';
          tooltip.style.left = lin.left + 'px';            
          break;
        default:
          tooltip.style.top = lin.bottom + 'px';
          tooltip.style.left = lin.left + 'px'; 
    }    
    })   
}