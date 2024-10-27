const img = document.querySelector('img')
let rotate = 0
function movePointer(e) {
    if ((Math.abs(+e.movementX) + Math.abs(+e.movementY)) > 5) {
        rotate = Math.atan2(e.movementX, -e.movementY)
    }
    img.style.transform = `translate(${e.clientX}px,${e.clientY}px) rotate(${rotate}rad)`
}

window.addEventListener('mousemove', movePointer)