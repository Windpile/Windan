const storageKey = 'darkmode';
const darkModeClass = 'Night';
const sunIconClass = 'fa-solid fa-lightbulb';
const moonIconClass = 'fa-solid fa-moon';

function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle(darkModeClass);
  const isDarkMode = body.classList.contains(darkModeClass);
  localStorage.setItem(storageKey, isDarkMode ? '1' : '0');
  
  const darkModeButton = document.querySelector('.DarkMode');
  if (isDarkMode) {
    darkModeButton.setAttribute('id', 'lbtn');
    darkModeButton.querySelector('i').setAttribute('class', sunIconClass);
  } else {
    darkModeButton.removeAttribute('id');
    darkModeButton.setAttribute('id', 'Nbtn');
    darkModeButton.querySelector('i').setAttribute('class', moonIconClass);
  }
}

function initializeDarkMode() {
  const dm = localStorage.getItem(storageKey);
  if (dm === '1') {
    toggleDarkMode();
  }
}

(function() {
  function appendHtml(parent, html) {
    parent.insertAdjacentHTML('beforeend', html);
  }
  
  const darkModeButtonHtml = `<li><button class="DarkMode" id="Nbtn" aria-label="Dark Mode" onclick="toggleDarkMode()"><i class="${moonIconClass}"></i></button></li>`;
  const linksContainer = document.querySelector('.links');
  appendHtml(linksContainer, darkModeButtonHtml);
  
  initializeDarkMode();
})();
