const readline = require('readline');

//config file  
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let answers = []
let paragraph = `Hi, my name is ${answers[0]}. An activity that i like to do is ${answers[1]}.
I like to listing to ${answers[2]} while ${answers[1]}. My favourite meal is ${answers[4]}, and my favourite thing to
eat for that meal is ${answers[5]}. My favourite sport is ${answers[6]}. My superpower is ${answers[7]}`;
// rl.question('What do you think of Node.js? ', (answer) => {
//   console.log(`Thank you for your valuable feedback: ${answer}`);

rl.question("What's your name? Nicknames are also acceptable :)\n", (userInput) => {
  answers.push(userInput)

  rl.question("What's an activity you like doing?\n", (userInput) => {
    answers.push(userInput)

    rl.question("What do you listen to while doing that?\n", (userInput) => {
      answers.push(userInput)

      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)\n", (userInput) => {
        answers.push(userInput)

        rl.question("What's your favourite thing to eat for that meal?)\n", (userInput) => {
          answers.push(userInput)

          rl.question("Which sport is your absolute favourite?)\n", (userInput) => {
            answers.push(userInput)

            rl.question("What is your superpower? In a few words, tell us what you are amazing at!)\n", (userInput) => {
              answers.push(userInput)

              rl.close();
              // console.log(`\n Hi, my name is ${answers[0]}. An activity that i like to do is ${answers[1]}.I like to listing to ${answers[2]} while ${answers[1]}. My favourite meal is ${answers[4]}, and my favourite thing toeat for that meal is ${answers[5]}. My favourite sport is ${answers[6]}. My superpower is ${answers[7]}`);
            })

          })
        })
      })
    })
  })
});

rl.on('close', () => {
  console.log(`\n Hi, my name is ${answers[0]}. An activity that i like to do is ${answers[1]}.I like to listing to ${answers[2]} while ${answers[1]}. My favourite meal is ${answers[4]}, and my favourite thing toeat for that meal is ${answers[5]}. My favourite sport is ${answers[6]}. My superpower is ${answers[7]}`);

})

// let paragraph = `Hi, my name is ${answers[0]}. An activity that i like to do is ${answers[1]}.
// I like to listing to ${answers[2]} while ${answers[1]}. My favourite meal is ${answers[4]}, and my favourite thing to
// eat for that meal is ${answers[5]}. My favourite sport is ${answers[6]}. My superpower is ${answers[7]}`;

// console.log(paragraph)