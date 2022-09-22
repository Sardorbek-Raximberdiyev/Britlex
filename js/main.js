const elSiteHeader = document.querySelector('.site-header');
const elOpenButton = document.querySelector('.open-button');
const elHamburgerOpenButton = document.querySelector('.open-btn');

if (elOpenButton) {
  elOpenButton.addEventListener("click", function (){
    elSiteHeader.classList.toggle('site-header-open');
  })
}

if (elHamburgerOpenButton) {
  elHamburgerOpenButton.addEventListener("click", function (){
    elSiteHeader.classList.remove('site-header-open');
  })
}