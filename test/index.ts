
import AreYouReady from '../src';
const ayr = new AreYouReady();

console.log('ready');

setTimeout(() => {
  ayr.signalLive(true);
  console.log('now live');
}, 2000);

setTimeout(() => {
  ayr.signalReady(true);
  console.log('now ready');
}, 4000);
