'use strict';

const renderBanner = async () => {
  await initBanner(0);

  // "Anthony Web Services"
  moveCaret('js-type-01');
  await elapseTime(500);
  getEl('js-header').scrollIntoView();
  await elapseTime(1500);
  await typeText('js-type-01', `DON'T`, 70);
  // await typeText('js-type-01', `맞을래?`, 70);
  await elapseTime(300);
  getEl('js-space-01').classList.remove('hidden');
  // getEl('js-next-01').classList.remove('hidden');
  await typeText('js-type-02', `BE`, 100);
  getEl('js-space-02').classList.remove('hidden');
  // if (isMobile())getEl('js-next-02').classList.remove('hidden'); 
  await typeText('js-type-03', `a CUNT!`, 40);
  blinkCaret(true);
  // getEl('js-main-img-1').classList.add('bw-opacity-trans');
  await elapseTime(2000);

  getEl('js-header').classList.add('blk-trans');
  getEl('js-body').classList.add('blk-trans');
  getEl('js-type-01').classList.add('white-trans');
  getEl('js-type-02').classList.add('white-trans');
  getEl('js-type-03').classList.add('white-trans');
  getEl('js-logo-text').classList.add('white-trans');
  getEl('js-email').classList.add('op-trans');

}

// const startEventListener = () => {
//   startContactListener(); // start listener
// }

const handleEmail = e => {
  window.location.href = 'mailto:ask@morokuzu.com';
}
const main = async () => {
  // startEventListener();

  // if (!isMobile()) {
  //   getEl('js-main-img-1').src = './img/banner-bw.jpg';
  //   getEl('js-main-img-2').src = './img/banner-col.jpg';
  //   getEl('js-main-img-3').src = './img/banner-full.jpg';
  // }
  await loadFont();

  renderBanner();




}

main();
