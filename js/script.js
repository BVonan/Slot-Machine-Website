// slot pics
slotImages = [
    "images/cherry.png", 
    "images/lemon.png",
    "images/seven.png",
    "images/watermelon.png"
  ];
  
  
  var slot1 = document.getElementById("slot1");
  var slot2 = document.getElementById("slot2");
  var slot3 = document.getElementById("slot3");
  var result = document.getElementById("result");
  
  // win and lose
  var wins = document.getElementById("wins");
  var losses = document.getElementById("losses");
  // players bet
  var betInput = document.getElementById("bet");
  
  let score = {wins: 0, losses: 1, winAmt: 1};
  
  // spin the pictures
  function spin() {
    var bet = Number(betInput.value);
    if (bet <= 0) {
      alert("Please enter a valid bet amount");
      return;
    }
    // // Update the score elements
    wins.textContent = score.wins;
    losses.textContent = score.losses;
  
    // Generate random slot images
    var slotImage1 = slotImages[Math.floor(Math.random() * slotImages.length)];
    var slotImage2 = slotImages[Math.floor(Math.random() * slotImages.length)];
    var slotImage3 = slotImages[Math.floor(Math.random() * slotImages.length)];
  
    // Update the slot images
    slot1.src = slotImage1;
    slot2.src = slotImage2;
    slot3.src = slotImage3;
  
    // Check to see if player wins
    if (slotImage1 === slotImage2 && slotImage2 === slotImage3) {
      score.wins++;
      const winnMultiplier = Math.floor(Math.random() * 999) + 2 ;
        // document.getElementbyId("#winAmt").innerHTML = '${score.winAmt}';
      score.winAmt = winnMultiplier;
        document.getElementById("winAmt").innerHTML = `${score.winAmt}`;
        score.winAmt++;
      wins.textContent = score.wins;
      losses.textContent = score.losses;
      winAmt.textContent = score.winAmt;
    }   else {
        score.losses++
    }
  }
  
  // new game
  function reset() {
    score = {
      wins: 0,
      losses: 0,
      winAmt: 0
    };
    wins.textContent = score.wins;
    losses.textContent = score.losses;
    winAmt.textContent = score.winAmt;
    slot1.src = "images/stopSign.png";
    slot2.src = "images/stopSign.png";
    slot3.src = "images/stopSign.png";
  }
  
  