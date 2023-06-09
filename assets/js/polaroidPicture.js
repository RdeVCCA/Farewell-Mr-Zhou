const polaroidPictures = document.querySelectorAll('.polaroid');
var prevTime
var currentMove = 0;

function movePolariodPictures() {
    for (var [i,picture] of Object.entries(polaroidPictures)) {
        if (i%2!=currentMove) continue;
        picture.style.transition = 'transform 1s ease-in-out';
        picture.style.transform = 'rotate(' + (picture.prevDir*(Math.random() * 5 + 3)) + 'deg)';
        picture.prevDir *= -1;
    }
    currentMove = (currentMove+1)%2;
}
function initPolariodPictures() {
    for (var picture of polaroidPictures) {
        picture.prevDir = Math.random() > 0.5 ? 1 : -1;
    }
}
initPolariodPictures()
