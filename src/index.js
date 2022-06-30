import './css/style.css';
import playerHealtStatus from './js/app';

const player = { name: 'Маг', health: 50 };

document.querySelector('h1').innerText = `${player.name}: ${playerHealtStatus(player)}`;
