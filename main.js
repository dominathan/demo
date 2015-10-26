var charlestonActivities = ['eat','drink','shop','show'];
var restaurants = ['halls','charleston Grill','palmetto Cafe'];



function playAgain() {
  var finalAnswer = confirm("Would you like to play again");
  if(finalAnswer === true) {
    game()
   }
};

function appendToPage(userResponse,tagElement) {
  var markup = document.createElement(tagElement);
  var body = document.getElementsByTagName('body');
  body = body[0];
  markup.textContent = userResponse;
  body.appendChild(markup);
}

function game() {
  var userActivty = prompt("Would you rather go 1) eat 2) drink 3) shop 4) show");
  appendToPage(userActivty,'p');

  if(userActivty === charlestonActivities[0]) {
  console.log('YAY I LIKE EATING!');
  userActivty = prompt("Halls, Charleston Grill, Palmetto Cafe").toLowerCase();
  appendToPage(userActivty,'p');
  var enoughMoney = confirm('Can you really afford this.');
  if(enoughMoney && restaurants.indexOf(userActivty) > -1) {
    var greedy = confirm("CAN I COME!?");
    if(greedy === true) {
      console.log("YOUR THE BEST");
    }
    while(greedy === false) {
      greedy = confirm('CAN I COME PLEASE');
    }
  } else { //If they don't like our restaurants
    console.log("You should just go get a big mac");
    playAgain();
  }

  } else if(userActivty === "drink") {
    console.log('YAY I LIKE DRINKING!');
    var drinkChoice = confirm("Do you want to go to Charlies!?");
    if(drinkChoice === true) {
      console.log("Tell them you know peter and you'll get a free drink");
      playAgain();
    } else {
      alert('You should drink more');
      playAgain();
    }

  } else if(userActivty === "shop") {
    console.log('YAY I LIKE SHOP!');
  } else if(userActivty === "show") {
    console.log('YAY I LIKE SHOW!');
  } else {
   console.log("Thats too bad, these are the only options")
   playAgain();

  }
}


game();


