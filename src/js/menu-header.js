export class Menu {
  constructor(){
    this.menuIcon = document.querySelector('.slider__icon');
    this.sliderNav = document.querySelector('.slider__nav');
    this.overlayElement = document.querySelector('.overlay');
    this.expanded = false;
  }
  
  toggle(){
    this.menuIcon.addEventListener('click', (e) =>{
      this.toggleOverlay();
      this.toggleIcon();
      this.toggleMenu();
    })
  }

  toggleOverlay(){
    let overlayFade = 'overlay--fade';
    let overlayHidden = 'overlay__hidden';
    this.overlayElement.classList.toggle(overlayFade);  
    document.body.classList.toggle(overlayHidden); 
  }

  toggleIcon = () => {
    let expandedEl = this.menuIcon.getAttribute('aria-expanded');

    if(expandedEl === 'false'){
      this.expanded = true;
      this.menuIcon.setAttribute('aria-label', 'close navigation');
    }else{
      this.expanded = false;
      this.menuIcon.setAttribute('aria-label', 'open navigation')
    }

    this.menuIcon.setAttribute('aria-expanded', this.expanded);  
    this.focusMenu();   
  }

  toggleMenu(){
    let menuOpen = 'slider__nav--open';
    this.sliderNav.classList.toggle(menuOpen);
  }

  focusMenu(){    
    let menuItems = document.querySelectorAll('.slider__icon, .slider__nav .slider__nav-link');
    let first = menuItems[0];
    let last = menuItems[menuItems.length - 1];

    first.addEventListener("keydown", (e)=>{
      if (e.key === "Tab" && e.shiftKey) {
        e.preventDefault();
        last.focus()
      }
    });

    last.addEventListener("keydown", (e) =>{
      if (e.key === "Tab" && !e.shiftKey) {
        e.preventDefault();
        first.focus();
      }
    });
  }
}