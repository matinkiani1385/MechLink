const menuBtn = document.getElementById("menu_link");
const sideMenu = document.getElementById('side-menu');
const overlay = document.getElementById('overlay');
const closeDiv = document.getElementById('close-div');
const skillsDiv = document.getElementById('skillsDiv');
let skillInputNumber = 1;
const addButton = document.getElementById('addButton');
const signUpLabels = document.getElementsByClassName('signUpLabel');
const signUpPane = document.getElementById('signUpPane');
const loginLabels = document.getElementsByClassName('loginLabel');
const loginPane = document.getElementById('loginPane');
const inputs = document.getElementsByTagName('input');

menuBtn.addEventListener('click', () => {
    sideMenu.classList.add('open');
    overlay.classList.add('show');
    document.getElementsByTagName('body')[0].style.overflowY = "hidden";
});

[closeDiv, overlay].forEach(element => {
    element.addEventListener('click', () => {
        sideMenu.classList.remove('open');
        signUpPane.classList.remove('open');
        loginPane.classList.remove('open');
        overlay.classList.remove('show');
        document.getElementsByTagName('body')[0].style.overflowY = "auto";
    });
});

for (const signUpLabel of signUpLabels) {
    signUpLabel.addEventListener('click', () => {
        signUpPane.classList.add('open');
        sideMenu.classList.remove('open');
        loginPane.classList.remove('open');
        overlay.classList.add('show');
        document.getElementsByTagName('body')[0].style.overflowY = "hidden";
    });
}

for (const loginLabel of loginLabels) {
    loginLabel.addEventListener('click', () => {
        sideMenu.classList.remove('open');
        signUpPane.classList.remove('open');
        loginPane.classList.add('open');
        overlay.classList.add('show');
        document.getElementsByTagName('body')[0].style.overflowY = "hidden";
    });
}

for (const input of inputs) {
    if (input.getAttribute('type') == "tel" || input.getAttribute('type') == "password" || input.getAttribute('type') == "email") {
        input.addEventListener('keyup', () => {
            if (input.value != '') {
                input.style.direction = "ltr";
            } else {
                input.style.direction = "rtl";
            }
        });
    }
}

addButton.addEventListener('click', () => {
    const newInput = document.createElement('input');
    newInput.setAttribute('type', 'text');
    newInput.setAttribute('name', `required-skill${skillInputNumber + 1}`);
    newInput.setAttribute('id', `requiredSkill${skillInputNumber + 1}`);
    newInput.setAttribute('placeholder', 'مهارت مورد نیاز');
    skillInputNumber++;
    skillsDiv.replaceChild(newInput, addButton);
    skillsDiv.appendChild(addButton);
});