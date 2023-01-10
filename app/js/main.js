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
const swiper = new Swiper('.swiper', {
  spaceBetween: 80,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      
      
     
    },
    grabCursor: true,
   effect: "coverflow"

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
  const snowFlakes = new Snowflakes({
    container: document.querySelector('.wrapper')
  });
