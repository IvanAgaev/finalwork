
(function(){
const headerBurgerBtn = document.querySelector('.header__burger');
const headerNavigation = document.querySelector('.header__nav');
const headerButtonClosenav = document.querySelector('.header__nav-close');
headerBurgerBtn.addEventListener('click', a =>{
    headerNavigation.classList.add('active'); 
    });
    headerButtonClosenav.addEventListener('click', a => {
        headerNavigation.classList.remove('active');

    })
})(); 

const swiper = new Swiper('.team__swiper', {
  spaceBetween: 40,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      
      
     
    },
    grabCursor: true,
   effect: "coverflow"

  }); 
  const swipe = new Swiper('.achievements__swiper', {
    spaceBetween: 40,
  
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        
        
       
      },
      grabCursor: true,
     breakpoints: {
      
      768: {
        slidesPerView: 4,
      },
     },
  
    }); 
  (function() {
    const tabsItem = document.querySelectorAll('.tabs__link');
    const tabsContent = document.querySelectorAll('.tabs__section-item');
    tabsItem.forEach((tab, index) => {
      tab.addEventListener('click' , (e) => {
        e.preventDefault();
       tabsContent.forEach(content => {
        content.classList.remove('active')
       }) 
       tabsItem.forEach(tab => {
        tab.classList.remove('active')
       })

       tabsItem[index].classList.add('active');
       tabsContent [index].classList.add('active');
      })
    }) 
      

  })();
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
(function () {
const langItem = document.querySelectorAll('.header__lang-item');
 langItem.forEach((el, index) => {
  el.classList.remove('active');
 
  
  if (el.getAttribute('language') === localStorage.getItem('lang')) {
    el.classList.add('active');
      } 
      if (localStorage.getItem('lang') === null) {
      localStorage.setItem('lang', 'EN');
      }
 
  

  el.addEventListener('click', (e) => {
    e.preventDefault();
    langItem.forEach((el)=>{
      el.classList.remove('active');

    })
    el.classList.add('active');
    const attr = el.getAttribute('language');
    localStorage.setItem('lang', attr);
  });
  
});
}) ();












