const readline = require('readline');

//config file  
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let answers = []
// let paragraph = `Hi, my name is ${answers[0]}. An activity that i like to do is ${answers[1]}.
// I like to listing to ${answers[2]} while ${answers[1]}. My favourite meal is ${answers[3]}, and my favourite thing to
// eat for that meal is ${answers[4]}. My favourite sport is ${answers[5]}. My superpower is ${answers[6]}`;

const printParagraph = () => {
  let paragraph = `Hi, my name is ${answers[0]}. An activity that i like to do is ${answers[1]}.
I like to listing to ${answers[2]} while ${answers[1]}. My favourite meal is ${answers[3]}, and my favourite thing to
eat for that meal is ${answers[4]}. My favourite sport is ${answers[5]}. My superpower is ${answers[6]}`;
  console.log(paragraph)
}
// console.log("Before inital RL", answers)
rl.question("What's your name? Nicknames are also acceptable :)\n", (userInput) => {
  answers.push(userInput)
  // console.log("AFTER RL 1", answers)
  rl.question("What's an activity you like doing?\n", (userInput) => {
    answers.push(userInput)
    // console.log("AFTER RL 2", answers)
    rl.question("What do you listen to while doing that?\n", (userInput) => {
      answers.push(userInput)
      // console.log("AFTER RL 3", answers)
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)\n", (userInput) => {
        answers.push(userInput)
        // console.log("AFTER RL 4", answers)
        rl.question("What's your favourite thing to eat for that meal?)\n", (userInput) => {
          answers.push(userInput)
          // console.log("AFTER RL 5", answers)
          rl.question("Which sport is your absolute favourite?)\n", (userInput) => {
            answers.push(userInput)
            // console.log("AFTER RL 6", answers)
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!)\n", (userInput) => {
              answers.push(userInput)

              // console.log("STRING ANSWERS", answers)
              // console.log(paragraph);
              printParagraph()
              // console.log(`\n Hi, my name is ${answers[0]}. An activity that i like to do is ${answers[1]}.I like to listing to ${answers[2]} while ${answers[1]}. My favourite meal is ${answers[3]}, and my favourite thing toeat for that meal is ${answers[4]}. My favourite sport is ${answers[5]}. My superpower is ${answers[6]}`);
              rl.close();
            })

          })
        })
      })
    })
  })
});
//listner for close. still dosent return index 7
// rl.on('close', () => {
//   console.log(`\n Hi, my name is ${answers[0]}. An activity that i like to do is ${answers[1]}.I like to listing to ${answers[2]} while ${answers[1]}. My favourite meal is ${answers[4]}, and my favourite thing toeat for that meal is ${answers[5]}. My favourite sport is ${answers[6]}. My superpower is ${answers[7]}`);

// })

// let paragraph = `Hi, my name is ${answers[0]}. An activity that i like to do is ${answers[1]}.
// I like to listing to ${answers[2]} while ${answers[1]}. My favourite meal is ${answers[4]}, and my favourite thing to
// eat for that meal is ${answers[5]}. My favourite sport is ${answers[6]}. My superpower is ${answers[7]}`;

// console.log(paragraph)