document.addEventListener('DOMContentLoaded', function() {
const scroller = document.querySelector('.image-scroller');
let isDown = false;
let startX;
let scrollLeft;

scroller.addEventListener('mousedown', (e) => {
isDown = true;
scroller.classList.add('active');
startX = e.pageX - scroller.offsetLeft;
scrollLeft = scroller.scrollLeft;
});

scroller.addEventListener('mouseleave', () => {
isDown = false;
scroller.classList.remove('active');
});

scroller.addEventListener('mouseup', () => {
isDown = false;
scroller.classList.remove('active');
});

scroller.addEventListener('mousemove', (e) => {
if(!isDown) return;
e.preventDefault();
const x = e.pageX - scroller.offsetLeft;
const walk = (x - startX) * 3; //scroll-fast
scroller.scrollLeft = scrollLeft - walk;
});
});
