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
    
let insertPicx = [
    "Willy-The-Goblin.png",
    "CartoonBigDaddy.png",
    "CartoonFatherChristmas.png"
];

let insertY = [
    "the soup kitchen",
    "Disneyland",
    "the White House"];

let insertZ = [
    "spontaneously combusted",
    "melted into a puddle on the sidewalk",
    "turned into a slug and crawled away"];

let xItem = randomValueFromArray(insertX);
let yItem = randomValueFromArray(insertY);
let zItem = randomValueFromArray(insertZ);

let xPicture = randomValueFromArray(insertPicx);

newStory = newStory.replace(/:insertx:/g, xItem);
newStory = newStory.replace(":inserty:", yItem);
newStory = newStory.replace(":insertz:", zItem);

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
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
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';

  let pictureBox = document.getElementById("image");
  let pictureX = document.createElement('img');
  pictureX.src = ("../img/" + xPicture);
  pictureBox.appendChild(pictureX);
}