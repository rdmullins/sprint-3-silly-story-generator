//  Awesome Inc. Bootcamp Sprint 3
//  Silly Story Generator
//  by Roger Mullins - Team DaVinci

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
let newStory = storyText;

let insertX = [
    "Willy the Goblin",
    "Big Daddy",
    "Father Christmas"];
    
let insertPicX = [
    "Willy-The-Goblin.png",
    "CartoonBigDaddy.png",
    "CartoonFatherChristmas.png"];

let insertY = [
    "the soup kitchen",
    "Disneyland",
    "the White House"];

let insertPicY = [
    "CartoonSoupKitchen.png",
    "CartoonDisneyland.png",
    "CartoonWhiteHouse.png"];

let insertZ = [
    "spontaneously combusted",
    "melted into a puddle on the sidewalk",
    "turned into a slug and crawled away"];

let insertPicZ = [
    "CartoonSpontaneousCombustion.png",
    "CartoonMeltedIntoAPuddle.png",
    "CartoonTurnedIntoASlug.png"
];



// let xItem = randomValueFromArray(insertX);
// let yItem = randomValueFromArray(insertY);
// let zItem = randomValueFromArray(insertZ);

// let xPicture = randomValueFromArray(insertPicX);
// let yPicture = randomValueFromArray(insertPicY);
// let zPicture = randomValueFromArray(insertPicZ);

x = randomValue();
y = randomValue();
z = randomValue();

let xItem = insertX[x];
let yItem = insertY[y];
let zItem = insertZ[z];
let xPicture = insertPicX[x];
let yPicture = insertPicY[y];
let zPicture = insertPicZ[z];

newStory = newStory.replace(/:insertx:/g, xItem);
newStory = newStory.replace(":inserty:", yItem);
newStory = newStory.replace(":insertz:", zItem);

// function randomValueFromArray(array) {
//   const random = Math.floor(Math.random()*array.length);
//   return array[random];
// }

function randomValue() {
  const random = Math.floor(Math.random()*3);
  // console.log(random);
  return random;
}

randomize.addEventListener('click', result);

function result() {

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);
  }

  if(document.getElementById("uk").checked) {
    const weight = (Math.round(300/14) + " stone");
    const temperature = (Math.round((94-32)*5/9) + " centigrade");
    newStory = newStory.replace("94 fahrenheit", temperature);
    newStory = newStory.replace("300 pounds", weight);
    if (yItem == "the White House") {
      newStory = newStory.replace("the White House", "No. 10 Downing Street");
      yPicture = "cartoonNo10Downing.jpg";
    }
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';

  let pictureBoxX = document.getElementById("imageX");
  let pictureX = document.createElement('img');
  pictureX.src = ("../img/" + xPicture);
  pictureBoxX.appendChild(pictureX);

  let pictureBoxY = document.getElementById("imageY");
  let pictureY = document.createElement('img');
  pictureY.src = ("../img/" + yPicture);
  pictureBoxY.appendChild(pictureY);

  let pictureBoxZ = document.getElementById("imageZ");
  let pictureZ = document.createElement('img');
  pictureZ.src = ("../img/" + zPicture);
  pictureBoxZ.appendChild(pictureZ);
}