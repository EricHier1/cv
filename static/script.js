document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.container');
  const circleData = [
    { label: 'Get Motivated', url: 'https://youaremighty.fracz.com/' },
    { label: 'Strength Program Generator', url: 'https://github.com/EricHier1/FitTechVet' },
    { label: 'Calorie Calcs', url: 'https://tdeecalculator.net/' },
    { label: 'Meal Planner', url: 'https://www.eatthismuch.com/' },
    { label: 'Developer Roadmaps', url: 'https://roadmap.sh/' },
    { label: 'FreeCodeCamp', url: 'https://www.freecodecamp.org/' },
    { label: 'Fun Games', url: 'https://geekflare.com/web-browser-games/' },
    { label: 'Breathe', url: 'https://www.calm.com/' },
  ];

  function createSmallCircle(label, url, angle) {
    const smallCircle = document.createElement('div');
    smallCircle.className = 'small-circle';
    smallCircle.style.transform = `rotate(${angle}deg) translate(50%) translateY(-50%) rotate(-${angle}deg)`;
    smallCircle.innerHTML = `<span>${label}</span>`;

    // Add event listener to the button
    smallCircle.addEventListener('click', function () {
      window.open(url, '_blank');
    });

    container.appendChild(smallCircle);
  }

  circleData.forEach(({ label, url }, index) => {
    const angle = (360 / circleData.length) * index;
    createSmallCircle(label, url, angle);
    const smallCircle = container.querySelector('.small-circle:last-child');
    smallCircle.style.animationName = `orbit-${index}`;
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes orbit-${index} {
          0% {
            transform: rotate(${angle}deg) translate(240px) rotate(-${angle}deg);
          }
          100% {
            transform: rotate(${angle + 360}deg) translate(240px) rotate(-${angle + 360}deg);
          }
        }
    `;
    document.head.appendChild(style);
  });
});
