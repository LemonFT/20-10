const loading = document.getElementById('loading');
const loadingProcess = document.querySelector('.process');
const loadingPercentage = document.getElementById('loadingPercentage');
const buttonClick = document.getElementById('button-click-me');

const page2 = document.getElementById('navi-page2');
let start = 0;
let duration = 4000;

function updatePercentage() {
    const elapsed = Date.now() - start;
    const percentage = Math.min(100, (elapsed / duration) * 100).toFixed(0);
    loadingPercentage.textContent = percentage + '%';
    if (percentage < 100) {
        requestAnimationFrame(updatePercentage);
    } else {
        buttonClick.style.display = 'block';
        buttonClick.style.display = 'flex';
    }
}

function createHeart() {
    const heartContainer = document.querySelector('.heart-container');
    const heart = document.createElement('img');
    heart.classList.add('heart');
    heart.src = "./assets/heart.png";

    const randomLeft = Math.random() * 100;
    heart.style.left = randomLeft + 'vw';
    const randomTop = 50 + Math.random() * 50;
    heart.style.top = randomTop + 'vh';
    const randomSize = 10 + Math.random() * 40;
    heart.style.width = randomSize + 'px';
    heart.style.height = randomSize + 'px';
    heartContainer.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

function createLetters() {
    const heartContainer = document.querySelector('.heart-container');
    const letter = document.createElement('img');
    letter.classList.add('letters');
    const letterImages = [
        "./assets/letters.png",
        "./assets/letter_14482809.png",
        "./assets/love-letter_9445426.png"
    ];

    const randomIndex = Math.floor(Math.random() * letterImages.length);
    letter.src = letterImages[randomIndex];

    const randomLeft = Math.random() * 100;
    letter.style.left = randomLeft + 'vw';

    const randomTop = Math.random() * 30; 
    letter.style.top = randomTop + 'vh';

    heartContainer.appendChild(letter);
    setTimeout(() => {
        letter.remove();
    }, 6000); 
}


function receiveLetters(){
    document.getElementById('happy').style.zIndex = 1;
    const heartContainer = document.querySelector('.heart-container').style.zIndex = 2;
    setInterval(createLetters, 400);
}


function handleNaviPage2() {
    loading.style.display = 'none';
    buttonClick.style.display = 'none';
    page2.style.display = 'block';
    page2.style.display = 'flex';
    setInterval(createHeart, 200);
}
window.onload = () => {
    buttonClick.style.display = 'none';
    page2.style.display = 'none';
    start = Date.now();
    requestAnimationFrame(updatePercentage);
}