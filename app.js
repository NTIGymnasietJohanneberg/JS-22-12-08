console.log("Yae!, Im linked. Say app.js");

const e = document.getElementById('myElement');
if (e !== null) {
    console.log('Hittade ett element med id="myElement"');
    console.log('Det innehåller texten: ' + e.innerText);
    e.style.backgroundColor = 'hotpink';
} else {
    console.log('Hittade inget element!');
}

const parent = document.getElementById('myElement');

const newElement = document.createElement('div');

parent.appendChild(newElement);

newElement.innerHTML = "Hi! im new element...";

const elementP = document.getElementById('para');

elementP.innerHTML = 'Super!';

const nisse = document.querySelector('#nisse');
const hackElement = document.createElement('span');
hackElement.innerHTML = 'HACKED!!!';
hackElement.style.fontWeight = 'bold';
hackElement.style.color = 'limegreen';
nisse.style.color = 'brown';

nisse.appendChild(hackElement);
