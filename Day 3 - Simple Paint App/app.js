var canvas = document.getElementById('draw');
var ctx = canvas.getContext('2d');
var pos = {x: 0, y: 0}

resize();

function resize() {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
}

function setPosition(e) {
    pos.x = e.clientX;
    pos.y = e.clientY;
}

function draw(e) {
    if (e.buttons !== 1) return;
    var color = document.getElementById('hex').value;

    ctx.beginPath(); //begins drawing
    ctx.lineWidth = 15;
    ctx.lineCap = 'round';
    ctx.strokeStyle = color;

    ctx.moveTo(pos.x, pos.y);
    setPosition(e);
    ctx.lineTo(pos.x, pos.y);

    ctx.stroke();
}

function download() {
    var download = document.getElementById('download')
    var image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');

    download.setAttribute('href', image);
}

window.addEventListener('resize', resize);
document.addEventListener('mousemove', draw);
document.addEventListener('mousedown', setPosition);
document.addEventListener('mouseenter', setPosition);

