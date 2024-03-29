
      /* 
      Algorithm (Rock Paper Scissors)
      When we click a button:
      1) Computer randomly selects a move
      2) Compare the moves to get the result
      3) Update a score
      4) Display the result and score in a popup.  
      */

      let score = JSON.parse(localStorage.getItem('score')) || 
      {
        wins: 0,
        losses: 0,
        ties: 0
      }; // So if score is not null then right side will work and if score is null then left side will work. It is same as 'if' statement as below. 

      updateScoreElement();


      /*
      if (score === null) {
        score = {
          wins: 0,
          losses: 0,
          ties: 0
        };
        
      } 
      */

      // Why this step? Because we remove value from localStorage and when nothing is present in the local storage, it stores as NULL. Due to this, we can run code line 92 because JS can't access score === null. To overcome this issue, we need to give default value to score if nothing is present in the local storage. That's why this 'if' statement.
      
      // we are referring 'score' from line 97. We are using JSON.parse() to convert string into object. 

      /* Why are we creating a object outside a function?
       That's because every time we make a move, we need to update the score from last time. So in order to save the score from last time, we need to keep it outside the function. If the score was inside the function the function would create a new score every tim, which is not what we want. So in this situation, in order to save a score from last time, we are going to keep this variable outside. 
      */

      let isAutoPlaying = false; 
      let intervalID;

      //const autoPlay = () {

      // }


      function autoPlay() {
        if (!isAutoPlaying) {
          intervalID = setInterval(() => {
            const playerMove = pickComputerMove(); // So we want comptuer to play against it every 3 sec and for that we need to assign "pickComputerMove()" to "playerMove" because it will select rock or paper or scissors based on "pickComptuerMove()" function. Now if you look at "playGmae" function, it takes one parameter and we are giving "playerMove" as an input which have random comptuer move and in "playGmae" function, we are comparing "playerMove" to "computerMove" and then displaying output. And because of this, this code making computer play against computer every 3 sec.
            playGmae(playerMove);
          }, 3000);
          isAutoPlaying = true;
        } else {
          clearInterval(intervalID);
          isAutoPlaying = false;
        }
      }

      document.querySelector('.js-rock-button')
        .addEventListener('click', () => {
          playGmae('rock')
        });

      document.querySelector('.js-paper-button')
      .addEventListener('click', () => {
        playGmae('paper')
      });

      document.querySelector('.js-scissors-button')
      .addEventListener('click', () => {
        playGmae('scissors')
      });

      document.body.addEventListener('keydown', (event) => {
        if (event.key === 'r' ) {
          playGmae('rock');
        } else if (event.key === 'p') {
          playGmae('paper');
        } else if (event.key === 's') {
          playGmae('scissors');
        }
      })


      function playGmae (playerMove) {
        const computerMove = (pickComputerMove());

        let result = '';

        if (playerMove === 'scissors') {
          if (computerMove === 'rock') {
              result = 'You lose';
          } else if (computerMove === 'paper') {
              result = 'You win';
          } else if (computerMove === 'scissors') {
              result = 'Tie.'
          }

        } else if (playerMove === 'paper') {
          if (computerMove === 'rock') {
              result = 'You win';
          } else if (computerMove === 'paper') {
              result = 'Tie.';
          } else if (computerMove === 'scissors') {
              result = 'You lose';
          }
          
        } else if (playerMove === 'rock') {
          if (computerMove === 'rock') {
              result = 'Tie.';
          } else if (computerMove === 'paper') {
              result = 'You lose';
          } else if (computerMove === 'scissors') {
              result = 'You win';
          }
        }

        // Update score.
        if (result === 'You win') {
          score.wins += 1;
        } else if (result === 'You lose') {
          score.losses += 1;
        } else if (result === 'Tie.') {
          score.ties += 1;
        }

        // After updating the score we are going to save that score in localStorage becasue if we refresh our page right now meaning withour localStorage then it will reset our score which was before refresh. We want to retain the score even after refreshing the page.

        localStorage.setItem('score',JSON.stringify(score)); // So we are saving 'hello' in the local storage and we can get that value or that 'hello' using 'messgae'. localStorage only support strings to store and that's why we are using JSON.stringify because it will convert 'score' object into string.

        updateScoreElement();

        document.querySelector('.js-result')
          .innerHTML = result;

        document.querySelector('.js-moves')
          .innerHTML = ` You 
        <img src="images/${playerMove}-emoji.png" class="move-icon">
        <img src="images/${computerMove}-emoji.png" class="move-icon">
        Computer`;
      }

      function updateScoreElement() {
        document.querySelector('.js-score')
          .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

      }

      function pickComputerMove() {

        const randomNumber = Math.random();

        let computerMove = '';

        if (randomNumber >= 0 && randomNumber < 1/3) {
          computerMove = 'rock';
        } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
          computerMove = 'paper';
        } else if (randomNumber >= 2/3 && randomNumber < 1 ) {
          computerMove = 'scissors';
        }

        return computerMove;

      }
