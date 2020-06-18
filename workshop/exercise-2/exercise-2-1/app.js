// Preset values
const FROGS = 3;

//Exercise 2.1
let track = document.querySelector('.track');

for (let i = 0; i < FROGS; i++) {
    let li = document.createElement('li');
    li.innerHTML = `<span>${i+1}<span>`;
    li.setAttribute('id', `lane-${i+1}`);
    track.appendChild(li);
}


//Exercise 2.2 + Challenge 1
const racers = [];
const nums = [];
while (nums.length < FROGS) {
    let num = Math.ceil(Math.random() * 4);
    if (!nums.includes(num)) {
        nums.push(num);
        racers.push(frogStable[num]);
    }
}

console.log(racers);

//Exercise 2.3
racers.forEach(function(elem, index) {
    let racer = document.createElement('span');
    racer.innerText = `${elem.name} ${elem.number}`;
    racer.classList.add('frog');
    racer.classList.add(`frog-${elem.number}`)
    racer.style.backgroundColor = elem.color;
    document.querySelector(`#lane-${index + 1}`).appendChild(racer);

    elem.progress = 0;
    let racerProgress = document.createElement('span');
    racerProgress.innerText = `\t${elem.progress}`;
    document.querySelector(`#lane-${index + 1}`).appendChild(racerProgress);
})

let cssLink = document.createElement('link');
cssLink.rel = 'stylesheet';
cssLink.href = '../assets/styles.css';
document.querySelector('head').appendChild(cssLink);

//Exercise 2.4
function racingFrog(elem) {
    //frogs hop at random speed between 5% and 10% width
    let distance = (Math.random() * 5 + 5) / 100;
    let hop = setInterval(function() {
        elem.progress += distance;
        if (elem.progress >= 1) {
            elem.progress = 1;
            clearInterval(hop);
            console.log(`Bravo! ${elem.name} has reached the end!`)
        }
        document.querySelector(`.frog-${elem.number}`).style.left = `${elem.progress * 100}%`;
    }, 500)
}

racers.forEach(racingFrog);