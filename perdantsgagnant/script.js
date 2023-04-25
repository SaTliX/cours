const players= ("Joueur 1", "Joueur 2")


// Define a function to be executed when the button is clicked
function handlePayClick(players) { 
    const nbPlayer = randomNumber(0,1) 
  nameElement.innerHTML = players[0];
}

// Add a click event listener to the button that calls the handlePayClick function
payButton.addEventListener('click', handlePayClick);
