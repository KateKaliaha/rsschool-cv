
const btnBurger = document.querySelector('.burger');
const navWrapper = document.querySelector('.nav');
const body = document.querySelector('.body');
const navList = document.querySelector('.nav-list');
const itemLink = document.querySelectorAll('.nav-link');




btnBurger.addEventListener('click', function () {
  navWrapper.classList.toggle('active-nav');
  btnBurger.classList.toggle('active-btn');
  body.classList.toggle("active");
})


navWrapper.addEventListener('click', (event) => {
  if (event.target.classList.contains('list' || 'nav-link')) {
    navWrapper.classList.toggle('active-nav');
    body.classList.toggle("active");
    btnBurger.classList.toggle('active-btn');
  }
})

navList.addEventListener('click', (event) => {
  console.log(itemLink)
  if (event.target.classList.contains('nav-link')) {
    if(window.innerWidth >= 768) {
      itemLink.forEach (el => el.classList.remove('active'));
      event.target.classList.add('active');
    } else {
      itemLink.forEach (el => el.classList.remove('active'));
      event.target.classList.add('active');
      navWrapper.classList.toggle('active-nav');
      body.classList.toggle("active");
      btnBurger.classList.toggle('active-btn');
    }
  }
})

// navList.addEventListener('click', changeStatusLink)