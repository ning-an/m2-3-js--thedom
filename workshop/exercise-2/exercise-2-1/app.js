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

//create final ranking board
let main = document.querySelector('main');
let finalBoard = document.createElement('div');
finalBoard.classList.add('board');
main.appendChild(finalBoard);

let ranking = [];

//Exercise 2.3
racers.forEach(function(elem, index) {
    let racer = document.createElement('span');
    racer.innerText = `${elem.name}\n${elem.number}`;
    racer.classList.add('frog');
    racer.classList.add(`frog-${elem.number}`)
    // racer.style.backgroundColor = elem.color;
    document.querySelector(`#lane-${index + 1}`).appendChild(racer);

    elem.progress = 0;
    let racerProgress = document.createElement('span');
    racerProgress.innerText = `\t${elem.progress}`;
    document.querySelector(`#lane-${index + 1}`).appendChild(racerProgress);

//Exercise 2.4 - ...
    //frogs hop at random speed between 5% and 10% width
    let distance = (Math.random() * 5 + 5) / 100;
    let hop = setInterval(function() {
        elem.progress += distance;
        racerProgress.innerText = `${Math.round(elem.progress * 100)}%`;
        if (elem.progress >= 1) {
            elem.progress = 1;
            racerProgress.innerText = '100%';
            clearInterval(hop);
            console.log(`Bravo! ${elem.name} has reached the end!`)
            ranking.push(elem.name);
            console.log(ranking);
            if (ranking.length == 3) {
                console.log(`Congratulations to ${ranking[0]}; ${ranking[1]} ranks 2nd; sorry for ${ranking[2]}`);
                finalBoard.innerText = `No.1 ${ranking[0]}\nNo.2 ${ranking[1]}\nNo.3 ${ranking[2]}`;
                finalBoard.style.opacity = 1;
            }
        }
        document.querySelector(`.frog-${elem.number}`).style.left = `${elem.progress * 100}%`;
    }, 500)
})


let cssLink = document.createElement('link');
cssLink.rel = 'stylesheet';
cssLink.href = '../assets/styles.css';
document.querySelector('head').appendChild(cssLink);

