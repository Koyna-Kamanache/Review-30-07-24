let colors = ["blue","red","yellow","green","pink"]
let interval 
let currentIndex = 0

function changeColor() {
    document.body.style.backgroundColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
}

function startChangingColors() {
    interval = setInterval(changeColor, 1000);
}

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById('StopButton').addEventListener('click', () => {
        clearInterval(interval);
}) 
});
window.addEventListener("DOMContentLoaded", () => {
    document.getElementById('resumeButton').addEventListener('click', () => {
        startChangingColors();
}) 
});
window.addEventListener("DOMContentLoaded", () => {
    document.getElementById('addButton').addEventListener('click', () => {
        let val=
        colors.append(val)
}) 
});




// Start changing colors when the page loads
startChangingColors();