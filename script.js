const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const image4 = document.getElementById('image4');
const image5 = document.getElementById('image5');
const textBox = document.getElementById('text-box');
const titleButton = document.getElementById('title-button');

titleButton.style.visibility = 'hidden';

let darkMode = true;
const words = ["Hello...", "I'm Ryan Ekvall...", "I am a web developer...", "Thanks for stopping by...", "See more below"];

let i = 0;
let counter;
function typeNow() {
   let word = words[i].split("");
   var loopTyping = function() {
      if (word.length > 0) {
         document.getElementById('text').innerHTML += word.shift();
      } else {
         deleteNow();
         return false;
      };
      counter = setTimeout(loopTyping, 150);
   };
   loopTyping();
};
function deleteNow() {
   let word = words[i].split("");
   var loopDeleting = function() {
      if (word.length > 0) {
         word.pop();
         document.getElementById('text').innerHTML = word.join("");
      } else {
         if (words.length > (i + 1)) {
            i++;
         }
         else {
            i = 0;
         };
         typeNow();
         return false;
      };
      counter = setTimeout(loopDeleting, 100);
   };
   loopDeleting();
   
};
typeNow();


const imageMode = (color) => {
    image1.src = `img/undraw_portfolio_website_lidw_${color}.svg`;
    image2.src = `img/undraw_react_y7wq_${color}.svg`;
    image3.src = `img/undraw_Scrum_board_re_wk7v_${color}.svg`;
    image4.src = `img/undraw_posting_photo_${color}.svg`;
    image5.src = `img/undraw_profile_${color}.svg`;
}


const toggleDarkLightMode = (darkMode) => {
    nav.style.backgroundColor = darkMode ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = darkMode ? 'rgb(200 200 200 / 50%)' : 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = darkMode ? 'Dark Mode' : 'Light Mode';
    darkMode ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    darkMode ? imageMode('dark') : imageMode('light');
}

const switchTheme = (event) => {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleDarkLightMode(darkMode);

    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleDarkLightMode(false);
    }
}


toggleSwitch.addEventListener('change', switchTheme);

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        toggleDarkLightMode(darkMode);
    }
}
