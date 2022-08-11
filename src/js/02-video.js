import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = "videoplayer-current-time";

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlayerStopped, 500));
function onPlayerStopped (e) {
    const currentTime = e.seconds;
    localStorage.setItem(LOCALSTORAGE_KEY, currentTime);
}

if (localStorage.getItem(LOCALSTORAGE_KEY)) {
    player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY))
};
