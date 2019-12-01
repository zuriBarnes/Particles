let MYAPP = {};  //  this stops global variables influencing the code 
MYAPP.creator = 'Zuri Barnes';
MYAPP.launchDate = 'November 22, 2019';
MYAPP.title = 'Choose Your Own Adventure';
// Array of Happy Stories  //
MYAPP.happyStories = ['Once upon a time', 'When i was young', 'The best friends', 'Adventures of Billy Rob'];
// function selects a random  Happy Story from the array //
MYAPP.happyStorySelector = function() {
    let randomHappyStory = this.happyStories[Math.floor(Math.random()* 3)];
    console.log(`Welcome to: ${randomHappyStory}`);
}
// Array of Dark Stories  //
MYAPP.darkStories_2 = ['Bloody Smiles', 'Encampment', 'The Skull Collector', 'Inner Itch'];
// function selects a random  Dark Story from the array //
MYAPP.darkStorySelector = function () {
    let randomDarkStory = this.darkStories_2[Math.floor(Math.random()* 3)];
    console.log(`Welcome to: ${randomDarkStory}`);
}

