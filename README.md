# Sprint 3 - Silly Story Generator
### by Roger Mullins, Team DaVinci

This project allows the user to generate a silly story at random.

## Stretch Goals Added
- Added Pictures to Accompany Story
    - Pictures all generated from [craion.com](https://www.craion.com)
    - Modified the JS to allow images and text to actually sync up
        - Rather than using the array randomizer, wrote a different function that simply returns a random number and used that to pull the image and text elements from the arrays
    - Created container and divs to hold pictures
    - Modified CSS to resize the images
- UK Option Modification
    - If user selects 'UK', in addition to converting the two measurements the JS also checks to see if the random text selected for the destination is "the White House" - if so, it changes the text and image to "No. 10 Downing Street."
- Easter Egg (explained in demo)
