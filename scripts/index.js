import { footer } from './components/footer.js';
import { navbar } from './components/navbar.js';

// function untuk menampilkan navbar dan footer
export const initialSetup = () => {
  const footerEl = document.createRange().createContextualFragment(footer);
  document.querySelector('footer').replaceWith(footerEl);
  const navbarEl = document.createRange().createContextualFragment(navbar);
  document.querySelector('nav').replaceWith(navbarEl);

  const searchInput = document.getElementById('search-navbar');

  searchInput.onkeydown = (event) => {
    if (event.key === 'Enter' || event.keyCode === 13) {
      let searchKeyword = searchInput.value.trim();

      if (searchKeyword.length > 0) {
        window.location.href = '/search.html?q=' + searchInput.value;
      }
    }
  };
};
