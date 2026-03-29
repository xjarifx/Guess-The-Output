import fs from 'fs';

const valuesToTest = [
  "[]",
  "{}",
  '""',
  '"0"',
  "0",
  "1",
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "[1]",
  "['1']",
  "Infinity"
];

const operators = ["+", "-", "==", "===", "<", ">"];

const questions = [];
let id = 1;

// 1. Manually crafted best JS weirdness questions
const manualQuestions = [
  {
    code: `console.log(typeof NaN);`,
    options: ["'number'", "'NaN'", "'undefined'", "'object'"],
    correctAnswer: "'number'",
    explanation: "Ah, JavaScript! 'Not-a-Number' is fundamentally a numeric data type according to the IEEE-754 standard."
  },
  {
    code: `console.log([] + []);`,
    options: ["[]", "undefined", '"" (empty string)', "Error"],
    correctAnswer: '"" (empty string)',
    explanation: "When JS tries to add two arrays, it converts them to strings first."
  },
  {
    code: `console.log(0.1 + 0.2 === 0.3);`,
    options: ["true", "false", "undefined", "NaN"],
    correctAnswer: "false",
    explanation: "Welcome to floating-point math! 0.1 + 0.2 actually equals 0.30000000000000004."
  },
  {
    code: `console.log(Math.max() > Math.min());`,
    options: ["true", "false", "undefined", "Error"],
    correctAnswer: "false",
    explanation: "Math.max() returns -Infinity, and Math.min() returns Infinity! So -Infinity is definitely NOT greater than Infinity."
  },
  {
    code: `console.log(true + false);`,
    options: ["truefalse", "1", "0", "undefined"],
    correctAnswer: "1",
    explanation: "JavaScript converts booleans to numbers when using the '+' operator. true is 1 and false is 0."
  },
  {
    code: `console.log(!+[]+[]+![]);`,
    options: ["'truefalse'", "'10'", "undefined", "SyntaxError"],
    correctAnswer: "'truefalse'",
    explanation: "+[] becomes 0. !0 is true. ![] is false. Adding them concatenates their string representations."
  },
  {
    code: `console.log("b" + "a" + +"a" + "a");`,
    options: ["'baaa'", "'baNaN'", "'baNaNa'", "Error"],
    correctAnswer: "'baNaNa'",
    explanation: "The +'a' tries to convert 'a' to a number, resulting in NaN."
  },
  {
    code: `console.log(typeof null);`,
    options: ["'null'", "'undefined'", "'object'", "'function'"],
    correctAnswer: "'object'",
    explanation: "This is a famous bug in JavaScript since its first version! It should be 'null', but it returns 'object'."
  },
  {
    code: `console.log(1 < 2 < 3);`,
    options: ["true", "false", "SyntaxError", "TypeError"],
    correctAnswer: "true",
    explanation: "Evaluates left to right: (1 < 2) is true. Then true < 3 becomes 1 < 3, which is true."
  },
  {
    code: `console.log(3 > 2 > 1);`,
    options: ["true", "false", "SyntaxError", "TypeError"],
    correctAnswer: "false",
    explanation: "Evaluates left to right: (3 > 2) is true. Then true > 1 becomes 1 > 1, which is false!"
  }
];

// Add manual questions first
manualQuestions.forEach(q => {
  questions.push({ id: id++, ...q });
});

// Helper to format output strictly
function formatOutput(val) {
  if (typeof val === 'string') return `'${val}'`;
  if (Number.isNaN(val)) return 'NaN';
  if (val === null) return 'null';
  if (val === undefined) return 'undefined';
  if (typeof val === 'object') return Array.isArray(val) ? `[${val}]` : '[object Object]';
  return String(val);
}

function generateProcedural() {
  for (const v1 of valuesToTest) {
    for (const v2 of valuesToTest) {
      for (const op of operators) {
        if (questions.length >= 200) return;

        try {
          // Wrapped in parenthesis to prevent {} block parsing issues
          const expressionStr = `(${v1}) ${op} (${v2})`;
          let result;
          
          try {
             result = eval(expressionStr);
          } catch(e) {
             continue; // Skip invalid syntax combos
          }

          const correctAnswerStr = formatOutput(result);
          const code = `console.log(${v1} ${op} ${v2});`;
          
          // Generate 3 fake options based on common misconceptions
          const fakeOptions = new Set();
          
          if (op === "==" || op === "===" || op === "<" || op === ">") {
             fakeOptions.add(correctAnswerStr === "true" ? "false" : "true");
             fakeOptions.add("Error");
             fakeOptions.add("undefined");
             fakeOptions.add("TypeError");
          } else {
             fakeOptions.add("NaN");
             fakeOptions.add("undefined");
             fakeOptions.add("Error");
             fakeOptions.add("'[object Object]'");
             fakeOptions.add("0");
             fakeOptions.add("''");
          }
          
          fakeOptions.delete(correctAnswerStr); // ensure answer is not in fakes
          
          const optionsArray = Array.from(fakeOptions).slice(0, 3);
          optionsArray.push(correctAnswerStr);
          
          // shuffle options
          optionsArray.sort(() => Math.random() - 0.5);

          questions.push({
            id: id++,
            code,
            options: optionsArray,
            correctAnswer: correctAnswerStr,
            explanation: `When JavaScript evaluates '${v1} ${op} ${v2}', it performs type coercion resulting in ${correctAnswerStr}.`
          });
        } catch (e) {}
      }
    }
  }
}

generateProcedural();

// Write to file
const fileContent = `export const questions = ${JSON.stringify(questions, null, 2)};`;
fs.writeFileSync('src/data/questions.js', fileContent);

console.log(`Successfully wrote ${questions.length} questions to src/data/questions.js!`);
