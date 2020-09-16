const users = document.querySelectorAll('.users__user');
const dots = document.querySelectorAll('.dot');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close');
const wrapper = document.querySelector('.wrapper');
const ul = document.querySelector('.ul');

const form = document.querySelectorAll('form');
const submitButton = document.querySelector('.submit');

let currentUser = 2;

function slide(e) {
 users[e.currentTarget.dataset.user].classList.toggle("display");
 dots[e.currentTarget.dataset.user].classList.toggle("fill");
 
 if(currentUser > 3) {
  currentUser = 0;
 }
 users[currentUser].classList.toggle("display");
 dots[currentUser].classList.toggle("fill");
 currentUser++;
}

function skipTo(e) {
 users.forEach(user => {
  if(e.currentTarget.dataset.user == user.dataset.user) {
   dots[user.dataset.user].classList.add("fill");
   user.classList.add("display");
  } else {
   dots[user.dataset.user].classList.remove("fill");
   user.classList.remove("display");
  }
 })
 currentUser = +e.currentTarget.dataset.user + 1;
}

function toggleNav() {
 wrapper.classList.toggle('wrapper-overlay');
 ul.classList.toggle('show-ul');
 menu.classList.toggle('open');
 closeMenu.classList.toggle('close-menu');
}

function replaceUI(form) {
 form.addEventListener('invalid', (e) => {
  e.preventDefault();
  const invalidFields = form.querySelectorAll( ":invalid" );
  invalidFields.forEach(field => {
   field.nextElementSibling.textContent = "please enter a valid email";
   field.style.color = "#f25f3a";

   field.addEventListener("focus", () => {
    field.style.color = "#1d1e25";
   field.nextElementSibling.textContent = "";
   });
  });
 }, true);
}

users.forEach(user => user.addEventListener('touchend', slide));
dots.forEach(dot => dot.addEventListener('click', skipTo));
menu.addEventListener('click', toggleNav);
form.forEach(form => replaceUI(form));
