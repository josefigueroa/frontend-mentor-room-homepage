export class Slider {
  constructor(){
    this.prevButton = document.querySelector('.slider__prev');
    this.nextButton = document.querySelector('.slider__next');
    this.imagesEl = document.querySelectorAll('.slider__img');
    this.titleEl = document.querySelector('.slider__title');
    this.textEl = document.querySelector('.slider__text');
    this.linkEl = document.querySelector('.slider__link');
    this.index = 0;
  }

  sliderContent() {
    return {
      content: [{
        title: "Discover innovative ways to decorate",
        text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
      },
      {
        title: "We are available all across the globe",
        text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
      },
      {
        title: "Manufactured with the best materials",
        text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
      }]
    }
  
  }

  prev = () =>{  
    if (this.index === 0) {
      this.index= this.imagesEl.length;
    }    
    let content = this.sliderContent().content;
    let indexCount = (this.index) % this.imagesEl.length;
    let indexDecrement = (this.index - 1) % this.imagesEl.length;
    let titleEl = this.titleEl;
    let textEl = this.textEl;
    let linkEl = this.linkEl;
      
    this.imagesEl[indexCount].classList.add('slider__img--hidden');  
    this.imagesEl[indexDecrement].classList.remove('slider__img--hidden');  
    
    //background slider
    this.titleEl.textContent = content[indexDecrement].title;
    this.textEl.textContent = content[indexDecrement].text;

    //description slider
    titleEl.classList.remove('slider__title--animation');
    textEl.classList.remove('slider__text--animation');   
    linkEl.classList.remove('slider__link--animation');   

    setTimeout(function () {
      titleEl.textContent = content[indexDecrement].title;
      textEl.textContent = content[indexDecrement].text;
      titleEl.classList.add('slider__title--animation');
      textEl.classList.add('slider__text--animation');
      linkEl.classList.add('slider__link--animation'); 
    }, 100)
    

    this.index --;
  }

  next = () =>{  
    let content = this.sliderContent().content;
    let indexCount = (this.index) % this.imagesEl.length;
    let indexIncrement = (this.index + 1) % this.imagesEl.length;
    let titleEl = this.titleEl;
    let textEl = this.textEl;
    let linkEl = this.linkEl;

    //background slider
    this.imagesEl[indexCount].classList.add('slider__img--hidden');  
    this.imagesEl[indexIncrement].classList.remove('slider__img--hidden');  

    //description slider
    titleEl.classList.remove('slider__title--animation');
    textEl.classList.remove('slider__text--animation'); 
    linkEl.classList.remove('slider__link--animation');   

    setTimeout(function () {
      titleEl.classList.add('slider__title--animation');
      textEl.classList.add('slider__text--animation');
      linkEl.classList.add('slider__link--animation'); 
      titleEl.textContent = content[indexIncrement].title;
      textEl.textContent = content[indexIncrement].text;
    }, 100);

    this.index ++   
  }  


  eventListener = () => {
    this.nextButton.addEventListener('click', this.next);
    this.prevButton.addEventListener('click', this.prev);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        this.prev();
        this.prevButton.focus();
      } else if (e.key === 'ArrowRight') {
        this.next();
        this.nextButton.focus();       
      }
    })
  }
}