import anime from 'animejs'

document.addEventListener("DOMContentLoaded",function(){

  const timeline = anime.timeline();
  timeline
    .add({
      targets: 'path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInCubic',
      duration: 1500,
      delay: function(el, i) { return i * 250 },
    })
    .add({
      targets: 'path',
      stroke: '#ffc6ee',
      easing: 'easeOutQuad',
      duration: 1500
    });
});
