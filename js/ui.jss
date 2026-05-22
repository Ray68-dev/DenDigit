import { ROOMS } from './rooms.js';

export function initUI() {

  setupSearch();
  setupBottomSheet();
}

function setupSearch() {

  const input = document.getElementById('search-input');

  input.addEventListener('input', () => {

    const keyword = input.value.toLowerCase();

    const results = Object.entries(ROOMS)
      .filter(([id, room]) => {
        return room.name
          .toLowerCase()
          .includes(keyword);
      });

    renderSearchResults(results);

  });
}

function renderSearchResults(results) {

  const container = document.getElementById('search-results');

  if(results.length === 0) {
    container.style.display = 'none';
    return;
  }

  container.innerHTML = '';

  results.forEach(([id, room]) => {

    const div = document.createElement('div');

    div.className = 'search-item';

    div.innerHTML = `
      ${room.icon} ${room.name}
    `;

    div.onclick = () => {

      window.dispatchEvent(
        new CustomEvent('room-selected', {
          detail: room
        })
      );

      container.style.display = 'none';
    };

    container.appendChild(div);

  });

  container.style.display = 'block';
}

function setupBottomSheet() {

  document.addEventListener('click', (e) => {

    const sheet = document.getElementById('bottom-sheet');

    if(e.target.id === 'bottom-sheet') {
      sheet.classList.remove('open');
    }

  });
}

export function showToast(message) {

  const toast = document.getElementById('toast');

  toast.innerText = message;

  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}