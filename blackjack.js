
(function runGame() {

    var display = document.querySelector('figure');
    var cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    var card = anyCard();

    function anyCard() {
      return Math.floor(Math.random() * cards.length);
    }

    display.innerHTML = cards[card];
    card = anyCard();
    display.innerHTML = display.innerHTML + ' ' + cards[card];

    function checkResult(standing) {
        var splitCards = display.innerHTML.split(' ');
        var cardValue = 0;
        var hardValue = 0;
        var ace = false;

        splitCards.forEach(function (card, i) {
            if (Number(card)) {
                cardValue = cardValue + Number(card);
                hardValue = hardValue + Number(card);
            }
            if (card === 'J' || card === 'Q' || card === 'K') {
                cardValue = cardValue + 10;
                hardValue = hardValue + 10;
            }
            if (card === 'A') {
              if (!ace) {
                hardValue = cardValue + 10;
                ace: true;
              }
                cardValue = cardValue + 1;
                hardValue = hardValue + 1;
            }
        });
        if (hardValue > 21) {
          hardValue = cardValue;
        }
        if (hardValue <= 15 && standing) {
            alert('Dealer wins.');
        }
        else if (hardValue <= 18 && standing) {
            alert('Push!');
        }
        else if (cardValue <= 15 && standing) {
            alert('Dealer wins.');
        }
        else if (cardValue <= 18 && standing) {
            alert('Push!');
        }
        if (cardValue > 18 && standing || cardValue > 18 && standing || cardValue === 21 || hardValue === 21) {
            alert('You win!');
        }
        else if (cardValue > 21) {
            alert('You Bust.');
        }

    }

    document.getElementById('stand').addEventListener('click', function() {
      checkResult(true);
    });

    document.getElementById('hit').addEventListener('click', function() {
      display.innerHTML = display.innerHTML + ' ' + cards[anyCard()];
      checkResult(false);
    });

    checkResult(false);
})();
