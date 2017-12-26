import anime from 'animejs'

document.addEventListener("DOMContentLoaded",function(){

  const timeline = anime.timeline();
  timeline
    .add({
      targets: 'path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInCubic',
      duration: 1000,
    })
    .add({
      targets: 'path',
      fill: '#fff',
      'stroke-width': 3,
      easing: 'easeOutQuad',
      duration: 1000,
    })
    .add({
      targets: 'nav',
      opacity: 1,
      easing: 'easeInQuad',
      duration: 500,
    });
});
