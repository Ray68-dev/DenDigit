import { ROOMS } from './rooms.js';
import { EVENTS } from './events.js';

export let map;

export function initMap() {

  map = L.map('map').setView([
    -6.901300,
    112.068900
  ], 20);

  L.tileLayer(
    'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      maxZoom: 22
    }
  ).addTo(map);

  renderRooms();
}

function renderRooms() {

  Object.entries(ROOMS).forEach(([id, room]) => {

    const event = EVENTS.find(e => e.room === id);

    const marker = L.marker([
      room.lat,
      room.lng
    ]).addTo(map);

    let popup = `
      <b>${room.icon} ${room.name}</b>
    `;

    if(event) {
      popup += `<br><br>${event.icon} ${event.title}`;
    }

    marker.bindPopup(popup);

    marker.on('click', () => {
      showRoomDetail(room, event);
    });

  });
}

function showRoomDetail(room, event) {

  const sheet = document.getElementById('bottom-sheet');
  const content = document.getElementById('sheet-content');

  content.innerHTML = `
    <h2>${room.icon} ${room.name}</h2>

    <p>Lantai ${room.floor}</p>

    ${
      event
      ? `<div style="margin-top:10px">
          ${event.icon} ${event.title}
        </div>`
      : ''
    }
  `;

  sheet.classList.add('open');
}