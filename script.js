let number = document.querySelector('.number');

const getRandomNum = function() {
    number.innerHTML = Math.floor((Math.random()*100)+1);
    setTimeout(getRandomNum, 3000);
}
getRandomNum();