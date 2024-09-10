// Import prompt-sync for user input
const prompt = require('prompt-sync')();

// Quiz data
const quizData = {
  Science: {
    Easy: [
      {
        question: "What planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter"],
        answer: 2
      }
    ],
    Medium: [
      {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "O2", "CO2"],
        answer: 1
      }
    ],
    Hard: [
      {
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Ribosome", "Mitochondria"],
        answer: 3
      }
    ]
  },
  History: {
    Easy: [
      {
        question: "Who was the first President of the United States?",
        options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson"],
        answer: 2
      }
    ],
    Medium: [
      {
        question: "In which year did World War I start?",
        options: ["1914", "1918", "1939"],
        answer: 1
      }
    ],
    Hard: [
      {
        question: "Who discovered America?",
        options: ["Christopher Columbus", "Vasco da Gama", "Ferdinand Magellan"],
        answer: 1
      }
    ]
  },
  Entertainment: {
    Easy: [
      {
        question: "Who is known as the King of Pop?",
        options: ["Elvis Presley", "Michael Jackson", "Prince"],
        answer: 2
      }
    ],
    Medium: [
      {
        question: "Which movie features the character 'Forrest Gump'?",
        options: ["The Shawshank Redemption", "Forrest Gump", "Gladiator"],
        answer: 2
      }
    ],
    Hard: [
      {
        question: "Who directed the movie 'Inception'?",
        options: ["Quentin Tarantino", "Christopher Nolan", "James Cameron"],
        answer: 2
      }
    ]
  }
};

// Game logic
function playQuiz() {
  console.log("Welcome to the Quiz Game!\n");

  const categories = Object.keys(quizData);
  console.log("Categories:");
  categories.forEach((category, index) => {
    console.log(`${index + 1}. ${category}`);
  });

  const categoryChoice = prompt("Choose a category (1, 2, or 3): ");
  const chosenCategory = categories[categoryChoice - 1];

  const difficultyChoice = prompt("Choose a difficulty (Easy, Medium, Hard): ");
  const difficultyLevels = ["Easy", "Medium", "Hard"];
  const chosenDifficulty = difficultyLevels.find((level) => level.toLowerCase() === difficultyChoice.toLowerCase());

  if (!chosenCategory || !chosenDifficulty) {
    console.log("Invalid choice. Please restart the game.");
    return;
  }

  const questions = quizData[chosenCategory][chosenDifficulty];
  let score = 0;

  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];
    console.log(`\nQuestion ${i + 1}: ${question.question}`);
    question.options.forEach((option, index) => {
      console.log(`${index + 1}. ${option}`);
    });

    const answer = prompt("Your answer: ");
    if (parseInt(answer) === question.answer) {
      console.log("Correct!");
      score++;
    } else {
      console.log("Wrong!");
    }

    console.log(`Your current score is ${score}.\n`);
  }

  const playAgain = prompt("Would you like to play again? (Yes/No): ");
  if (playAgain.toLowerCase() === "yes") {
    playQuiz();
  } else {
    console.log("Thanks for playing!");
  }
}

// Start the game
playQuiz();
