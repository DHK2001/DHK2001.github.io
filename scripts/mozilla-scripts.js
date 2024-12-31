const myImage = document.querySelector('img');

myImage.addEventListener('click', () => {
    const mySrc = myImage.getAttribute('src');
    if (mySrc === 'img/mozilla.png') {
        myImage.setAttribute('src', 'img/mozillafirefox.png');
    } else {
        myImage.setAttribute('src', 'img/mozilla.png');
    }
});

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla, ' + storedName;
}

myButton.addEventListener('click', () => {
    setUserName();
});

function setUserName() { 
    const myName = prompt('Please enter your name.');
    if (!myName) {
        alert('Please enter a valid name.');
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla, ' + myName;
    }
}