// interaction with the more about button //
function buttonInfo() {
  alert ('Are you interested in learning more about Raspberry Pi? Take a look at the next page!');(
  window.location.href = 'https://www.raspberrypi.org/about');
}

// switch b/t big and small images //
function onClick(event) {
  const smallImage = event.currentTarget;
  const bigImage = document.querySelector(".big");

// remove big image and assign to small image //
  bigImage.classList.remove('big');
  bigImage.classList.add('small');

// remove small image and assign to big image //
  smallImage.classList.remove('small');
  smallImage.classList.add('big');
}

// for loop iterates through all img elements and adds the onClick event to click event//
const images = document.querySelectorAll("img");
for (let i=0; i<images.length; i++) {
  images[i].addEventListener('click', onClick);
}

// interaction on multiple choice buttons //
function wrong1() {
  alert("Let's try again!");
}

function right1() {
  alert("Very Good!");
}

// interaction on radio buttons //
function questionOneYes(x) {
  let questionOne = document.getElementsByName("valid");
  for (var index = 0; index < questionOne.length; index++) {
    if (questionOne[index].checked) {
      x = questionOne[index].value;
    }
  }
  if (x == 1) {
    alert ('Right! As with any normal PC, it is likely we need some additional hardware.');
  }
}

function questionOneNo(y) {
  let questionOneNo = document.getElementsByName("valid");
  for (var index = 0; index < questionOneNo.length; index++) {
    if (questionOneNo[index].checked) {
      y = questionOneNo[index].value;
    }
  }
  if (y == 2) {
    alert ('Lets try again!');
  }
}

function questionTwoYes(x) {
  let questionTwo = document.getElementsByName("valid");
  for (var index = 0; index < questionTwo.length; index++) {
    if (questionTwo[index].checked) {
      x = questionTwo[index].value;
    }
  }
  if (x == 1) {
    alert ('Lets try again!');
  }
}
function questionTwoNo(y) {
  let questionTwoNo = document.getElementsByName("valid");
  for (var index = 0; index < questionTwoNo.length; index++) {
    if (questionTwoNo[index].checked) {
      y = questionTwoNo[index].value;
    }
  }
  if (y == 2) {
    alert ('Right! The Pi has no internal storage or built in operating system. It requires a SD Card that is set up to boot the Pi.');
  }
}

// interaction with the submit button //
function submitted1() {
  alert("Your input has been emailed to the teacher. Now let's discuss with your group members about the project you have chosen.");
}

function submitted2() {
  alert("Welcome to the Pi world!");
}

// interaction with the select //
function answer() {
  var ans = document.getElementById("select").value;
    document.getElementById("answertxt").innerHTML = "You selected " + ans + "!  We are going to learn next how you can make it do what you want.";
}

const myform = document.querySelector("#myForm");
myform.addEventListener('submit', formSubmitted);

function formSubmitted(event) {
if(!myform.firstname.value || myform.firstname.value.length > 20)
{
document.querySelector("#firstname").classList.add("error");
}
if(!myform.lastname.value || myform.lastname.value.length > 30)
{
document.querySelector("#lastname").classList.add("error");
}
}
