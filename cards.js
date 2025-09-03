const suits = ['H', 'D', 'C', 'S'];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'];

const deck = [];

for (const suit of suits) {
  for (const rank of ranks) {
    deck.push({ suit, rank });
  }
}

shuffle(deck);
//dealCards(deck);
dealUpDownInitialCards(deck)

//document.getElementById("cards").innerHTML = dealCards(deck);

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function formatCard(card) {
  return card.rank + card.suit;
}

function formatUpDownCard(card) {
  return card.rank + "-" + card.suit;
}

function dealCards(deck) {
  for (let i = 0; i < 4; i++) {
    const hand = formatCard(deck[i * 2]) + ' ' + formatCard(deck[i * 2 + 1]);
    console.log(`Player ${i + 1}: ${hand}`);
  }

  const middleCards = deck.slice(8, 13).map(formatCard).join(' ');



  //document.getElementById("cards").innerHTML = middleCards;
  console.log('Middle: ' + middleCards);
}

function dealUpDownInitialCards(deck) {
  //for (let i = 0; i < 9; i++) {
  //  const hand = formatCard(deck[i * 2]);
    //console.log(`Player ${i + 1}: ${hand}`);
  //  document.getElementById("PosOne").innerHTML = hand;
  //  }

    let i = 0;
    const hand1 = formatUpDownCard(deck[0 * 1])
    document.getElementById("Pos1").innerHTML = hand1;
    const hand2 = formatUpDownCard(deck[1 * 1])    
    document.getElementById("Pos2").innerHTML = hand2;
    const hand3 = formatUpDownCard(deck[2 * 1])   
    document.getElementById("Pos3").innerHTML = hand3;
    const hand4 = formatUpDownCard(deck[3 * 1])   
    document.getElementById("Pos4").innerHTML = hand4;
    const hand5 = formatUpDownCard(deck[4 * 1])   
    document.getElementById("Pos5").innerHTML = hand5;
    const hand6 = formatUpDownCard(deck[5 * 1])   
    document.getElementById("Pos6").innerHTML = hand6;
    const hand7 = formatUpDownCard(deck[6 * 1])   
    document.getElementById("Pos7").innerHTML = hand7;
    const hand8 = formatUpDownCard(deck[7 * 1])   
    document.getElementById("Pos8").innerHTML = hand8;
    const hand9 = formatUpDownCard(deck[8 * 1])   
    document.getElementById("Pos9").innerHTML = hand9;

    // next card out is 
    console.log(deck.length)


  document.getElementById("CardCount").innerHTML = 9;

  fullCards(deck);

  



  //const middleCards = deck.slice(8, 13).map(formatCard).join(' ');

  

  //console.log('Middle: ' + middleCards);
}




function PosNUp(boxNumber)
{
  const cardCount = getCardCount()
  const hand9 = formatUpDownCard(deck[cardCount])   
  document.getElementById("Pos"+boxNumber+"-2").innerHTML = hand9
  //console.log(formatUpDownCard(deck[0]) + " " + getFirstPart(formatUpDownCard(deck[0])) + " " + formatUpDownCard(deck[cardCount]) + " " + getFirstPart(formatUpDownCard(deck[cardCount])))

  console.log(document.getElementById("Pos"+boxNumber+"").innerHTML)
  if (getFirstPart(formatUpDownCard(deck[cardCount])) <= getFirstPart(document.getElementById("Pos"+boxNumber).innerHTML))
  {
    document.getElementById("Pos"+boxNumber+"-X").innerHTML = "dead"
    // disable up down for 1 
  }
  else
  {
    document.getElementById("Pos"+boxNumber).innerHTML = formatUpDownCard(deck[cardCount])
  }

  AddToCardCount()
}

function PosNDn(boxNumber)
{
  const cardCount = getCardCount()
  const hand9 = formatUpDownCard(deck[cardCount])   
  document.getElementById("Pos"+boxNumber+"-2").innerHTML = hand9
  //console.log(formatUpDownCard(deck[0]) + " " + getFirstPart(formatUpDownCard(deck[0])) + " " + formatUpDownCard(deck[cardCount]) + " " + getFirstPart(formatUpDownCard(deck[cardCount])))

  console.log(document.getElementById("Pos"+boxNumber+"").innerHTML)
  if (getFirstPart(formatUpDownCard(deck[cardCount])) >= getFirstPart(document.getElementById("Pos"+boxNumber).innerHTML))
  {
    document.getElementById("Pos"+boxNumber+"-X").innerHTML = "dead"
    // disable up down for 1 
  }
  else
  {
    document.getElementById("Pos"+boxNumber).innerHTML = formatUpDownCard(deck[cardCount])
  }

  AddToCardCount()
}

function getFirstPart(str) {
  return parseInt(str.split('-')[0], 10);
}

function getCardCount() {
  return parseInt(document.getElementById("CardCount").innerHTML, 10);
}

function AddToCardCount() {
  let cardCount = parseInt(document.getElementById("CardCount").innerHTML, 10);
  document.getElementById("CardCount").innerHTML = cardCount + 1 
}

function fullCards(deck) {
for (let i = 0; i < 51; i++) {
    const hand = formatUpDownCard(deck[i * 1]);
    console.log(hand + " - ");
    //document.getElementById("PosOne").innerHTML = hand;
    }

}

// function Pos1Up() {
//   const cardCount = getCardCount()
//   const hand9 = formatUpDownCard(deck[cardCount])
//   document.getElementById("Pos1-2").innerHTML = hand9
//   //console.log(formatUpDownCard(deck[0]) + " " + getFirstPart(formatUpDownCard(deck[0])) + " " + formatUpDownCard(deck[cardCount]) + " " + getFirstPart(formatUpDownCard(deck[cardCount])))

//   console.log(document.getElementById("Pos1").innerHTML)
//   if (getFirstPart(formatUpDownCard(deck[cardCount])) <= getFirstPart(document.getElementById("Pos1").innerHTML)) {
//     document.getElementById("Pos1-X").innerHTML = "dead"

//     document.getElementById("Pos1Up").innerHTML = "-";
//     document.getElementById("Pos1Dn").innerHTML = "-";

//     // disable up down for 1 
//   }
//   else {
//     document.getElementById("Pos1").innerHTML = formatUpDownCard(deck[cardCount])
//   }

//   AddToCardCount()
// }

// function Pos1Dn() {
//   const cardCount = getCardCount()
//   const hand9 = formatUpDownCard(deck[cardCount])
//   document.getElementById("Pos1-2").innerHTML = hand9
//   console.log(formatUpDownCard(deck[0]) + " " + getFirstPart(formatUpDownCard(deck[0])) + " " + formatUpDownCard(deck[cardCount]) + " " + getFirstPart(formatUpDownCard(deck[cardCount])))

//   if (getFirstPart(formatUpDownCard(deck[cardCount])) >= getFirstPart(document.getElementById("Pos1").innerHTML)) {
//     document.getElementById("Pos1-X").innerHTML = "dead"

//     //document.getElementById("Pos1Up").innerHTML = "-";
//     //document.getElementById("Pos1Dn").innerHTML = "-";

//     // disable up down for 1    
//   }
//   else {
//     document.getElementById("Pos1").innerHTML = formatUpDownCard(deck[cardCount])
//   }
//   AddToCardCount()
// }

// function Pos2Up() {
//   const cardCount = getCardCount()
//   const hand9 = formatUpDownCard(deck[cardCount])
//   document.getElementById("Pos2-2").innerHTML = hand9
//   //console.log(formatUpDownCard(deck[0]) + " " + getFirstPart(formatUpDownCard(deck[0])) + " " + formatUpDownCard(deck[cardCount]) + " " + getFirstPart(formatUpDownCard(deck[cardCount])))

//   console.log(document.getElementById("Pos2").innerHTML)
//   if (getFirstPart(formatUpDownCard(deck[cardCount])) <= getFirstPart(document.getElementById("Pos2").innerHTML)) {
//     document.getElementById("Pos2-X").innerHTML = "dead"
//     // disable up down for 1 
//   }
//   else {
//     document.getElementById("Pos2").innerHTML = formatUpDownCard(deck[cardCount])
//   }

//   AddToCardCount()
// }

// function Pos2Dn() {
//   const cardCount = getCardCount()
//   const hand9 = formatUpDownCard(deck[cardCount])
//   document.getElementById("Pos2-2").innerHTML = hand9
//   //console.log(formatUpDownCard(deck[0]) + " " + getFirstPart(formatUpDownCard(deck[0])) + " " + formatUpDownCard(deck[cardCount]) + " " + getFirstPart(formatUpDownCard(deck[cardCount])))

//   if (getFirstPart(formatUpDownCard(deck[cardCount])) >= getFirstPart(document.getElementById("Pos2").innerHTML)) {
//     document.getElementById("Pos2-X").innerHTML = "dead"
//     // disable up down for 1    
//   }
//   else {
//     document.getElementById("Pos2").innerHTML = formatUpDownCard(deck[cardCount])
//   }
//   AddToCardCount()
// }