import Player from '@vimeo/player';
import throttle from 'lodash.throttle'

const CURRENT_TIME_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const currentTime = localStorage.getItem(CURRENT_TIME_KEY)
player.setCurrentTime(currentTime || 0);

player.on('timeupdate', throttle(timeUpdate, 1000));

function timeUpdate(e) {
  localStorage.setItem(CURRENT_TIME_KEY, e.seconds);
}