let heading;
let degree = 0;
let timer = null;
const speed = 14;
const pauseTime = 2000;
const spin = 2;
function rotateHeading() {
  if(!heading)return;
  degree = degree + 3;
  degree %= 360 * spin;
  let className;
  for (let i = 0; i < spin; i++) {
    if (degree === 90 + 360 * i) { className = 'back'; break; }
    if (degree === 270 + 360 * i) { className = 'face'; break; }
  }
  if (className) heading.className = className;


  heading.style.transformOrigin='9% 0%';
  heading.style.transform= `rotateY(${degree}deg)`;
  if (degree === 0) {
    clearInterval(timer);
    setTimeout(startRotation, pauseTime)
  }
}
function startRotation() {
  heading = document.getElementById('heading');
  if(timer)clearInterval(timer);

  degree=0;
  timer = setInterval(rotateHeading, speed);
}
startRotation();