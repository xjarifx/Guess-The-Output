export const questions = [
  {
    "id": 1,
    "code": "console.log(typeof NaN);",
    "options": [
      "'number'",
      "'NaN'",
      "'undefined'",
      "'object'"
    ],
    "correctAnswer": "'number'",
    "explanation": "Ah, JavaScript! 'Not-a-Number' is fundamentally a numeric data type according to the IEEE-754 standard."
  },
  {
    "id": 2,
    "code": "console.log([] + []);",
    "options": [
      "[]",
      "undefined",
      "\"\" (empty string)",
      "Error"
    ],
    "correctAnswer": "\"\" (empty string)",
    "explanation": "When JS tries to add two arrays, it converts them to strings first."
  },
  {
    "id": 3,
    "code": "console.log(0.1 + 0.2 === 0.3);",
    "options": [
      "true",
      "false",
      "undefined",
      "NaN"
    ],
    "correctAnswer": "false",
    "explanation": "Welcome to floating-point math! 0.1 + 0.2 actually equals 0.30000000000000004."
  },
  {
    "id": 4,
    "code": "console.log(Math.max() > Math.min());",
    "options": [
      "true",
      "false",
      "undefined",
      "Error"
    ],
    "correctAnswer": "false",
    "explanation": "Math.max() returns -Infinity, and Math.min() returns Infinity! So -Infinity is definitely NOT greater than Infinity."
  },
  {
    "id": 5,
    "code": "console.log(true + false);",
    "options": [
      "truefalse",
      "1",
      "0",
      "undefined"
    ],
    "correctAnswer": "1",
    "explanation": "JavaScript converts booleans to numbers when using the '+' operator. true is 1 and false is 0."
  },
  {
    "id": 6,
    "code": "console.log(!+[]+[]+![]);",
    "options": [
      "'truefalse'",
      "'10'",
      "undefined",
      "SyntaxError"
    ],
    "correctAnswer": "'truefalse'",
    "explanation": "+[] becomes 0. !0 is true. ![] is false. Adding them concatenates their string representations."
  },
  {
    "id": 7,
    "code": "console.log(\"b\" + \"a\" + +\"a\" + \"a\");",
    "options": [
      "'baaa'",
      "'baNaN'",
      "'baNaNa'",
      "Error"
    ],
    "correctAnswer": "'baNaNa'",
    "explanation": "The +'a' tries to convert 'a' to a number, resulting in NaN."
  },
  {
    "id": 8,
    "code": "console.log(typeof null);",
    "options": [
      "'null'",
      "'undefined'",
      "'object'",
      "'function'"
    ],
    "correctAnswer": "'object'",
    "explanation": "This is a famous bug in JavaScript since its first version! It should be 'null', but it returns 'object'."
  },
  {
    "id": 9,
    "code": "console.log(1 < 2 < 3);",
    "options": [
      "true",
      "false",
      "SyntaxError",
      "TypeError"
    ],
    "correctAnswer": "true",
    "explanation": "Evaluates left to right: (1 < 2) is true. Then true < 3 becomes 1 < 3, which is true."
  },
  {
    "id": 10,
    "code": "console.log(3 > 2 > 1);",
    "options": [
      "true",
      "false",
      "SyntaxError",
      "TypeError"
    ],
    "correctAnswer": "false",
    "explanation": "Evaluates left to right: (3 > 2) is true. Then true > 1 becomes 1 > 1, which is false!"
  },
  {
    "id": 11,
    "code": "console.log([] + []);",
    "options": [
      "NaN",
      "''",
      "undefined",
      "Error"
    ],
    "correctAnswer": "''",
    "explanation": "When JavaScript evaluates '[] + []', it performs type coercion resulting in ''."
  },
  {
    "id": 12,
    "code": "console.log([] - []);",
    "options": [
      "0",
      "NaN",
      "undefined",
      "Error"
    ],
    "correctAnswer": "0",
    "explanation": "When JavaScript evaluates '[] - []', it performs type coercion resulting in 0."
  },
  {
    "id": 13,
    "code": "console.log([] == []);",
    "options": [
      "true",
      "false",
      "undefined",
      "Error"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '[] == []', it performs type coercion resulting in false."
  },
  {
    "id": 14,
    "code": "console.log([] === []);",
    "options": [
      "false",
      "undefined",
      "Error",
      "true"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '[] === []', it performs type coercion resulting in false."
  },
  {
    "id": 15,
    "code": "console.log([] < []);",
    "options": [
      "true",
      "Error",
      "undefined",
      "false"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '[] < []', it performs type coercion resulting in false."
  },
  {
    "id": 16,
    "code": "console.log([] > []);",
    "options": [
      "undefined",
      "Error",
      "false",
      "true"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '[] > []', it performs type coercion resulting in false."
  },
  {
    "id": 17,
    "code": "console.log([] + {});",
    "options": [
      "'[object Object]'",
      "Error",
      "NaN",
      "undefined"
    ],
    "correctAnswer": "'[object Object]'",
    "explanation": "When JavaScript evaluates '[] + {}', it performs type coercion resulting in '[object Object]'."
  },
  {
    "id": 18,
    "code": "console.log([] - {});",
    "options": [
      "NaN",
      "'[object Object]'",
      "undefined",
      "Error"
    ],
    "correctAnswer": "NaN",
    "explanation": "When JavaScript evaluates '[] - {}', it performs type coercion resulting in NaN."
  },
  {
    "id": 19,
    "code": "console.log([] == {});",
    "options": [
      "true",
      "Error",
      "undefined",
      "false"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '[] == {}', it performs type coercion resulting in false."
  },
  {
    "id": 20,
    "code": "console.log([] === {});",
    "options": [
      "undefined",
      "true",
      "Error",
      "false"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '[] === {}', it performs type coercion resulting in false."
  },
  {
    "id": 21,
    "code": "console.log([] < {});",
    "options": [
      "Error",
      "false",
      "undefined",
      "true"
    ],
    "correctAnswer": "true",
    "explanation": "When JavaScript evaluates '[] < {}', it performs type coercion resulting in true."
  },
  {
    "id": 22,
    "code": "console.log([] > {});",
    "options": [
      "undefined",
      "false",
      "Error",
      "true"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '[] > {}', it performs type coercion resulting in false."
  },
  {
    "id": 23,
    "code": "console.log([] + \"\");",
    "options": [
      "NaN",
      "undefined",
      "Error",
      "''"
    ],
    "correctAnswer": "''",
    "explanation": "When JavaScript evaluates '[] + \"\"', it performs type coercion resulting in ''."
  },
  {
    "id": 24,
    "code": "console.log([] - \"\");",
    "options": [
      "0",
      "Error",
      "undefined",
      "NaN"
    ],
    "correctAnswer": "0",
    "explanation": "When JavaScript evaluates '[] - \"\"', it performs type coercion resulting in 0."
  },
  {
    "id": 25,
    "code": "console.log([] == \"\");",
    "options": [
      "false",
      "true",
      "Error",
      "undefined"
    ],
    "correctAnswer": "true",
    "explanation": "When JavaScript evaluates '[] == \"\"', it performs type coercion resulting in true."
  },
  {
    "id": 26,
    "code": "console.log([] === \"\");",
    "options": [
      "false",
      "undefined",
      "Error",
      "true"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '[] === \"\"', it performs type coercion resulting in false."
  },
  {
    "id": 27,
    "code": "console.log([] < \"\");",
    "options": [
      "true",
      "Error",
      "undefined",
      "false"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '[] < \"\"', it performs type coercion resulting in false."
  },
  {
    "id": 28,
    "code": "console.log([] > \"\");",
    "options": [
      "true",
      "Error",
      "false",
      "undefined"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '[] > \"\"', it performs type coercion resulting in false."
  },
  {
    "id": 29,
    "code": "console.log([] + \"0\");",
    "options": [
      "NaN",
      "undefined",
      "'0'",
      "Error"
    ],
    "correctAnswer": "'0'",
    "explanation": "When JavaScript evaluates '[] + \"0\"', it performs type coercion resulting in '0'."
  },
  {
    "id": 30,
    "code": "console.log([] - \"0\");",
    "options": [
      "0",
      "Error",
      "undefined",
      "NaN"
    ],
    "correctAnswer": "0",
    "explanation": "When JavaScript evaluates '[] - \"0\"', it performs type coercion resulting in 0."
  },
  {
    "id": 31,
    "code": "console.log([] == \"0\");",
    "options": [
      "false",
      "undefined",
      "Error",
      "true"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '[] == \"0\"', it performs type coercion resulting in false."
  },
  {
    "id": 32,
    "code": "console.log([] === \"0\");",
    "options": [
      "false",
      "Error",
      "undefined",
      "true"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '[] === \"0\"', it performs type coercion resulting in false."
  },
  {
    "id": 33,
    "code": "console.log([] < \"0\");",
    "options": [
      "true",
      "undefined",
      "false",
      "Error"
    ],
    "correctAnswer": "true",
    "explanation": "When JavaScript evaluates '[] < \"0\"', it performs type coercion resulting in true."
  },
  {
    "id": 34,
    "code": "console.log([] > \"0\");",
    "options": [
      "false",
      "undefined",
      "Error",
      "true"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '[] > \"0\"', it performs type coercion resulting in false."
  },
  {
    "id": 35,
    "code": "console.log([] + 0);",
    "options": [
      "'0'",
      "Error",
      "undefined",
      "NaN"
    ],
    "correctAnswer": "'0'",
    "explanation": "When JavaScript evaluates '[] + 0', it performs type coercion resulting in '0'."
  },
  {
    "id": 36,
    "code": "console.log([] - 0);",
    "options": [
      "0",
      "undefined",
      "Error",
      "NaN"
    ],
    "correctAnswer": "0",
    "explanation": "When JavaScript evaluates '[] - 0', it performs type coercion resulting in 0."
  },
  {
    "id": 37,
    "code": "console.log([] == 0);",
    "options": [
      "Error",
      "undefined",
      "true",
      "false"
    ],
    "correctAnswer": "true",
    "explanation": "When JavaScript evaluates '[] == 0', it performs type coercion resulting in true."
  },
  {
    "id": 38,
    "code": "console.log([] === 0);",
    "options": [
      "false",
      "undefined",
      "Error",
      "true"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '[] === 0', it performs type coercion resulting in false."
  },
  {
    "id": 39,
    "code": "console.log([] < 0);",
    "options": [
      "undefined",
      "Error",
      "true",
      "false"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '[] < 0', it performs type coercion resulting in false."
  },
  {
    "id": 40,
    "code": "console.log([] > 0);",
    "options": [
      "true",
      "false",
      "Error",
      "undefined"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '[] > 0', it performs type coercion resulting in false."
  },
  {
    "id": 41,
    "code": "console.log([] + 1);",
    "options": [
      "undefined",
      "NaN",
      "'1'",
      "Error"
    ],
    "correctAnswer": "'1'",
    "explanation": "When JavaScript evaluates '[] + 1', it performs type coercion resulting in '1'."
  },
  {
    "id": 42,
    "code": "console.log([] - 1);",
    "options": [
      "NaN",
      "undefined",
      "-1",
      "Error"
    ],
    "correctAnswer": "-1",
    "explanation": "When JavaScript evaluates '[] - 1', it performs type coercion resulting in -1."
  },
  {
    "id": 43,
    "code": "console.log([] == 1);",
    "options": [
      "true",
      "Error",
      "undefined",
      "false"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '[] == 1', it performs type coercion resulting in false."
  },
  {
    "id": 44,
    "code": "console.log([] === 1);",
    "options": [
      "Error",
      "undefined",
      "true",
      "false"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '[] === 1', it performs type coercion resulting in false."
  },
  {
    "id": 45,
    "code": "console.log([] < 1);",
    "options": [
      "undefined",
      "false",
      "Error",
      "true"
    ],
    "correctAnswer": "true",
    "explanation": "When JavaScript evaluates '[] < 1', it performs type coercion resulting in true."
  },
  {
    "id": 46,
    "code": "console.log([] > 1);",
    "options": [
      "true",
      "Error",
      "undefined",
      "false"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '[] > 1', it performs type coercion resulting in false."
  },
  {
    "id": 47,
    "code": "console.log([] + true);",
    "options": [
      "NaN",
      "undefined",
      "Error",
      "'true'"
    ],
    "correctAnswer": "'true'",
    "explanation": "When JavaScript evaluates '[] + true', it performs type coercion resulting in 'true'."
  },
  {
    "id": 48,
    "code": "console.log([] - true);",
    "options": [
      "NaN",
      "undefined",
      "Error",
      "-1"
    ],
    "correctAnswer": "-1",
    "explanation": "When JavaScript evaluates '[] - true', it performs type coercion resulting in -1."
  },
  {
    "id": 49,
    "code": "console.log([] == true);",
    "options": [
      "true",
      "false",
      "Error",
      "undefined"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '[] == true', it performs type coercion resulting in false."
  },
  {
    "id": 50,
    "code": "console.log([] === true);",
    "options": [
      "true",
      "false",
      "undefined",
      "Error"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '[] === true', it performs type coercion resulting in false."
  },
  {
    "id": 51,
    "code": "console.log([] < true);",
    "options": [
      "undefined",
      "true",
      "Error",
      "false"
    ],
    "correctAnswer": "true",
    "explanation": "When JavaScript evaluates '[] < true', it performs type coercion resulting in true."
  },
  {
    "id": 52,
    "code": "console.log([] > true);",
    "options": [
      "false",
      "undefined",
      "Error",
      "true"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '[] > true', it performs type coercion resulting in false."
  },
  {
    "id": 53,
    "code": "console.log([] + false);",
    "options": [
      "NaN",
      "undefined",
      "Error",
      "'false'"
    ],
    "correctAnswer": "'false'",
    "explanation": "When JavaScript evaluates '[] + false', it performs type coercion resulting in 'false'."
  },
  {
    "id": 54,
    "code": "console.log([] - false);",
    "options": [
      "Error",
      "undefined",
      "NaN",
      "0"
    ],
    "correctAnswer": "0",
    "explanation": "When JavaScript evaluates '[] - false', it performs type coercion resulting in 0."
  },
  {
    "id": 55,
    "code": "console.log([] == false);",
    "options": [
      "Error",
      "true",
      "false",
      "undefined"
    ],
    "correctAnswer": "true",
    "explanation": "When JavaScript evaluates '[] == false', it performs type coercion resulting in true."
  },
  {
    "id": 56,
    "code": "console.log([] === false);",
    "options": [
      "Error",
      "true",
      "false",
      "undefined"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '[] === false', it performs type coercion resulting in false."
  },
  {
    "id": 57,
    "code": "console.log([] < false);",
    "options": [
      "true",
      "Error",
      "false",
      "undefined"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '[] < false', it performs type coercion resulting in false."
  },
  {
    "id": 58,
    "code": "console.log([] > false);",
    "options": [
      "true",
      "Error",
      "undefined",
      "false"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '[] > false', it performs type coercion resulting in false."
  },
  {
    "id": 59,
    "code": "console.log([] + null);",
    "options": [
      "'null'",
      "NaN",
      "Error",
      "undefined"
    ],
    "correctAnswer": "'null'",
    "explanation": "When JavaScript evaluates '[] + null', it performs type coercion resulting in 'null'."
  },
  {
    "id": 60,
    "code": "console.log([] - null);",
    "options": [
      "0",
      "NaN",
      "undefined",
      "Error"
    ],
    "correctAnswer": "0",
    "explanation": "When JavaScript evaluates '[] - null', it performs type coercion resulting in 0."
  },
  {
    "id": 61,
    "code": "console.log([] == null);",
    "options": [
      "true",
      "Error",
      "undefined",
      "false"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '[] == null', it performs type coercion resulting in false."
  },
  {
    "id": 62,
    "code": "console.log([] === null);",
    "options": [
      "true",
      "false",
      "Error",
      "undefined"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '[] === null', it performs type coercion resulting in false."
  },
  {
    "id": 63,
    "code": "console.log([] < null);",
    "options": [
      "true",
      "Error",
      "false",
      "undefined"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '[] < null', it performs type coercion resulting in false."
  },
  {
    "id": 64,
    "code": "console.log([] > null);",
    "options": [
      "false",
      "undefined",
      "Error",
      "true"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '[] > null', it performs type coercion resulting in false."
  },
  {
    "id": 65,
    "code": "console.log([] + undefined);",
    "options": [
      "NaN",
      "undefined",
      "Error",
      "'undefined'"
    ],
    "correctAnswer": "'undefined'",
    "explanation": "When JavaScript evaluates '[] + undefined', it performs type coercion resulting in 'undefined'."
  },
  {
    "id": 66,
    "code": "console.log([] - undefined);",
    "options": [
      "undefined",
      "Error",
      "'[object Object]'",
      "NaN"
    ],
    "correctAnswer": "NaN",
    "explanation": "When JavaScript evaluates '[] - undefined', it performs type coercion resulting in NaN."
  },
  {
    "id": 67,
    "code": "console.log([] == undefined);",
    "options": [
      "false",
      "Error",
      "undefined",
      "true"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '[] == undefined', it performs type coercion resulting in false."
  },
  {
    "id": 68,
    "code": "console.log([] === undefined);",
    "options": [
      "Error",
      "true",
      "false",
      "undefined"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '[] === undefined', it performs type coercion resulting in false."
  },
  {
    "id": 69,
    "code": "console.log([] < undefined);",
    "options": [
      "Error",
      "true",
      "undefined",
      "false"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '[] < undefined', it performs type coercion resulting in false."
  },
  {
    "id": 70,
    "code": "console.log([] > undefined);",
    "options": [
      "undefined",
      "Error",
      "true",
      "false"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '[] > undefined', it performs type coercion resulting in false."
  },
  {
    "id": 71,
    "code": "console.log([] + NaN);",
    "options": [
      "undefined",
      "'NaN'",
      "NaN",
      "Error"
    ],
    "correctAnswer": "'NaN'",
    "explanation": "When JavaScript evaluates '[] + NaN', it performs type coercion resulting in 'NaN'."
  },
  {
    "id": 72,
    "code": "console.log([] - NaN);",
    "options": [
      "'[object Object]'",
      "Error",
      "NaN",
      "undefined"
    ],
    "correctAnswer": "NaN",
    "explanation": "When JavaScript evaluates '[] - NaN', it performs type coercion resulting in NaN."
  },
  {
    "id": 73,
    "code": "console.log([] == NaN);",
    "options": [
      "Error",
      "true",
      "undefined",
      "false"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '[] == NaN', it performs type coercion resulting in false."
  },
  {
    "id": 74,
    "code": "console.log([] === NaN);",
    "options": [
      "undefined",
      "Error",
      "false",
      "true"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '[] === NaN', it performs type coercion resulting in false."
  },
  {
    "id": 75,
    "code": "console.log([] < NaN);",
    "options": [
      "Error",
      "true",
      "undefined",
      "false"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '[] < NaN', it performs type coercion resulting in false."
  },
  {
    "id": 76,
    "code": "console.log([] > NaN);",
    "options": [
      "false",
      "undefined",
      "Error",
      "true"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '[] > NaN', it performs type coercion resulting in false."
  },
  {
    "id": 77,
    "code": "console.log([] + [1]);",
    "options": [
      "'1'",
      "Error",
      "undefined",
      "NaN"
    ],
    "correctAnswer": "'1'",
    "explanation": "When JavaScript evaluates '[] + [1]', it performs type coercion resulting in '1'."
  },
  {
    "id": 78,
    "code": "console.log([] - [1]);",
    "options": [
      "-1",
      "Error",
      "undefined",
      "NaN"
    ],
    "correctAnswer": "-1",
    "explanation": "When JavaScript evaluates '[] - [1]', it performs type coercion resulting in -1."
  },
  {
    "id": 79,
    "code": "console.log([] == [1]);",
    "options": [
      "false",
      "Error",
      "true",
      "undefined"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '[] == [1]', it performs type coercion resulting in false."
  },
  {
    "id": 80,
    "code": "console.log([] === [1]);",
    "options": [
      "false",
      "true",
      "Error",
      "undefined"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '[] === [1]', it performs type coercion resulting in false."
  },
  {
    "id": 81,
    "code": "console.log([] < [1]);",
    "options": [
      "false",
      "Error",
      "undefined",
      "true"
    ],
    "correctAnswer": "true",
    "explanation": "When JavaScript evaluates '[] < [1]', it performs type coercion resulting in true."
  },
  {
    "id": 82,
    "code": "console.log([] > [1]);",
    "options": [
      "true",
      "Error",
      "undefined",
      "false"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '[] > [1]', it performs type coercion resulting in false."
  },
  {
    "id": 83,
    "code": "console.log([] + ['1']);",
    "options": [
      "'1'",
      "Error",
      "undefined",
      "NaN"
    ],
    "correctAnswer": "'1'",
    "explanation": "When JavaScript evaluates '[] + ['1']', it performs type coercion resulting in '1'."
  },
  {
    "id": 84,
    "code": "console.log([] - ['1']);",
    "options": [
      "NaN",
      "Error",
      "-1",
      "undefined"
    ],
    "correctAnswer": "-1",
    "explanation": "When JavaScript evaluates '[] - ['1']', it performs type coercion resulting in -1."
  },
  {
    "id": 85,
    "code": "console.log([] == ['1']);",
    "options": [
      "false",
      "undefined",
      "Error",
      "true"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '[] == ['1']', it performs type coercion resulting in false."
  },
  {
    "id": 86,
    "code": "console.log([] === ['1']);",
    "options": [
      "false",
      "Error",
      "true",
      "undefined"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '[] === ['1']', it performs type coercion resulting in false."
  },
  {
    "id": 87,
    "code": "console.log([] < ['1']);",
    "options": [
      "true",
      "undefined",
      "Error",
      "false"
    ],
    "correctAnswer": "true",
    "explanation": "When JavaScript evaluates '[] < ['1']', it performs type coercion resulting in true."
  },
  {
    "id": 88,
    "code": "console.log([] > ['1']);",
    "options": [
      "true",
      "Error",
      "undefined",
      "false"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '[] > ['1']', it performs type coercion resulting in false."
  },
  {
    "id": 89,
    "code": "console.log([] + Infinity);",
    "options": [
      "'Infinity'",
      "NaN",
      "undefined",
      "Error"
    ],
    "correctAnswer": "'Infinity'",
    "explanation": "When JavaScript evaluates '[] + Infinity', it performs type coercion resulting in 'Infinity'."
  },
  {
    "id": 90,
    "code": "console.log([] - Infinity);",
    "options": [
      "undefined",
      "NaN",
      "Error",
      "-Infinity"
    ],
    "correctAnswer": "-Infinity",
    "explanation": "When JavaScript evaluates '[] - Infinity', it performs type coercion resulting in -Infinity."
  },
  {
    "id": 91,
    "code": "console.log([] == Infinity);",
    "options": [
      "true",
      "false",
      "Error",
      "undefined"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '[] == Infinity', it performs type coercion resulting in false."
  },
  {
    "id": 92,
    "code": "console.log([] === Infinity);",
    "options": [
      "false",
      "undefined",
      "Error",
      "true"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '[] === Infinity', it performs type coercion resulting in false."
  },
  {
    "id": 93,
    "code": "console.log([] < Infinity);",
    "options": [
      "true",
      "undefined",
      "Error",
      "false"
    ],
    "correctAnswer": "true",
    "explanation": "When JavaScript evaluates '[] < Infinity', it performs type coercion resulting in true."
  },
  {
    "id": 94,
    "code": "console.log([] > Infinity);",
    "options": [
      "Error",
      "false",
      "true",
      "undefined"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '[] > Infinity', it performs type coercion resulting in false."
  },
  {
    "id": 95,
    "code": "console.log({} + []);",
    "options": [
      "'[object Object]'",
      "Error",
      "undefined",
      "NaN"
    ],
    "correctAnswer": "'[object Object]'",
    "explanation": "When JavaScript evaluates '{} + []', it performs type coercion resulting in '[object Object]'."
  },
  {
    "id": 96,
    "code": "console.log({} - []);",
    "options": [
      "undefined",
      "Error",
      "'[object Object]'",
      "NaN"
    ],
    "correctAnswer": "NaN",
    "explanation": "When JavaScript evaluates '{} - []', it performs type coercion resulting in NaN."
  },
  {
    "id": 97,
    "code": "console.log({} == []);",
    "options": [
      "Error",
      "undefined",
      "true",
      "false"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '{} == []', it performs type coercion resulting in false."
  },
  {
    "id": 98,
    "code": "console.log({} === []);",
    "options": [
      "true",
      "Error",
      "undefined",
      "false"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '{} === []', it performs type coercion resulting in false."
  },
  {
    "id": 99,
    "code": "console.log({} < []);",
    "options": [
      "true",
      "Error",
      "undefined",
      "false"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '{} < []', it performs type coercion resulting in false."
  },
  {
    "id": 100,
    "code": "console.log({} > []);",
    "options": [
      "true",
      "undefined",
      "Error",
      "false"
    ],
    "correctAnswer": "true",
    "explanation": "When JavaScript evaluates '{} > []', it performs type coercion resulting in true."
  },
  {
    "id": 101,
    "code": "console.log({} + {});",
    "options": [
      "undefined",
      "'[object Object][object Object]'",
      "NaN",
      "Error"
    ],
    "correctAnswer": "'[object Object][object Object]'",
    "explanation": "When JavaScript evaluates '{} + {}', it performs type coercion resulting in '[object Object][object Object]'."
  },
  {
    "id": 102,
    "code": "console.log({} - {});",
    "options": [
      "Error",
      "NaN",
      "undefined",
      "'[object Object]'"
    ],
    "correctAnswer": "NaN",
    "explanation": "When JavaScript evaluates '{} - {}', it performs type coercion resulting in NaN."
  },
  {
    "id": 103,
    "code": "console.log({} == {});",
    "options": [
      "true",
      "false",
      "Error",
      "undefined"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '{} == {}', it performs type coercion resulting in false."
  },
  {
    "id": 104,
    "code": "console.log({} === {});",
    "options": [
      "Error",
      "undefined",
      "true",
      "false"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '{} === {}', it performs type coercion resulting in false."
  },
  {
    "id": 105,
    "code": "console.log({} < {});",
    "options": [
      "undefined",
      "Error",
      "false",
      "true"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '{} < {}', it performs type coercion resulting in false."
  },
  {
    "id": 106,
    "code": "console.log({} > {});",
    "options": [
      "undefined",
      "Error",
      "true",
      "false"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '{} > {}', it performs type coercion resulting in false."
  },
  {
    "id": 107,
    "code": "console.log({} + \"\");",
    "options": [
      "NaN",
      "'[object Object]'",
      "undefined",
      "Error"
    ],
    "correctAnswer": "'[object Object]'",
    "explanation": "When JavaScript evaluates '{} + \"\"', it performs type coercion resulting in '[object Object]'."
  },
  {
    "id": 108,
    "code": "console.log({} - \"\");",
    "options": [
      "undefined",
      "Error",
      "'[object Object]'",
      "NaN"
    ],
    "correctAnswer": "NaN",
    "explanation": "When JavaScript evaluates '{} - \"\"', it performs type coercion resulting in NaN."
  },
  {
    "id": 109,
    "code": "console.log({} == \"\");",
    "options": [
      "false",
      "undefined",
      "Error",
      "true"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '{} == \"\"', it performs type coercion resulting in false."
  },
  {
    "id": 110,
    "code": "console.log({} === \"\");",
    "options": [
      "Error",
      "true",
      "undefined",
      "false"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '{} === \"\"', it performs type coercion resulting in false."
  },
  {
    "id": 111,
    "code": "console.log({} < \"\");",
    "options": [
      "false",
      "undefined",
      "Error",
      "true"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '{} < \"\"', it performs type coercion resulting in false."
  },
  {
    "id": 112,
    "code": "console.log({} > \"\");",
    "options": [
      "false",
      "Error",
      "undefined",
      "true"
    ],
    "correctAnswer": "true",
    "explanation": "When JavaScript evaluates '{} > \"\"', it performs type coercion resulting in true."
  },
  {
    "id": 113,
    "code": "console.log({} + \"0\");",
    "options": [
      "Error",
      "NaN",
      "'[object Object]0'",
      "undefined"
    ],
    "correctAnswer": "'[object Object]0'",
    "explanation": "When JavaScript evaluates '{} + \"0\"', it performs type coercion resulting in '[object Object]0'."
  },
  {
    "id": 114,
    "code": "console.log({} - \"0\");",
    "options": [
      "NaN",
      "'[object Object]'",
      "Error",
      "undefined"
    ],
    "correctAnswer": "NaN",
    "explanation": "When JavaScript evaluates '{} - \"0\"', it performs type coercion resulting in NaN."
  },
  {
    "id": 115,
    "code": "console.log({} == \"0\");",
    "options": [
      "true",
      "Error",
      "undefined",
      "false"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '{} == \"0\"', it performs type coercion resulting in false."
  },
  {
    "id": 116,
    "code": "console.log({} === \"0\");",
    "options": [
      "true",
      "false",
      "Error",
      "undefined"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '{} === \"0\"', it performs type coercion resulting in false."
  },
  {
    "id": 117,
    "code": "console.log({} < \"0\");",
    "options": [
      "false",
      "true",
      "Error",
      "undefined"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '{} < \"0\"', it performs type coercion resulting in false."
  },
  {
    "id": 118,
    "code": "console.log({} > \"0\");",
    "options": [
      "false",
      "Error",
      "undefined",
      "true"
    ],
    "correctAnswer": "true",
    "explanation": "When JavaScript evaluates '{} > \"0\"', it performs type coercion resulting in true."
  },
  {
    "id": 119,
    "code": "console.log({} + 0);",
    "options": [
      "'[object Object]0'",
      "Error",
      "undefined",
      "NaN"
    ],
    "correctAnswer": "'[object Object]0'",
    "explanation": "When JavaScript evaluates '{} + 0', it performs type coercion resulting in '[object Object]0'."
  },
  {
    "id": 120,
    "code": "console.log({} - 0);",
    "options": [
      "'[object Object]'",
      "Error",
      "undefined",
      "NaN"
    ],
    "correctAnswer": "NaN",
    "explanation": "When JavaScript evaluates '{} - 0', it performs type coercion resulting in NaN."
  },
  {
    "id": 121,
    "code": "console.log({} == 0);",
    "options": [
      "undefined",
      "Error",
      "false",
      "true"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '{} == 0', it performs type coercion resulting in false."
  },
  {
    "id": 122,
    "code": "console.log({} === 0);",
    "options": [
      "true",
      "Error",
      "undefined",
      "false"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '{} === 0', it performs type coercion resulting in false."
  },
  {
    "id": 123,
    "code": "console.log({} < 0);",
    "options": [
      "false",
      "true",
      "Error",
      "undefined"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '{} < 0', it performs type coercion resulting in false."
  },
  {
    "id": 124,
    "code": "console.log({} > 0);",
    "options": [
      "undefined",
      "false",
      "Error",
      "true"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '{} > 0', it performs type coercion resulting in false."
  },
  {
    "id": 125,
    "code": "console.log({} + 1);",
    "options": [
      "NaN",
      "undefined",
      "'[object Object]1'",
      "Error"
    ],
    "correctAnswer": "'[object Object]1'",
    "explanation": "When JavaScript evaluates '{} + 1', it performs type coercion resulting in '[object Object]1'."
  },
  {
    "id": 126,
    "code": "console.log({} - 1);",
    "options": [
      "'[object Object]'",
      "NaN",
      "undefined",
      "Error"
    ],
    "correctAnswer": "NaN",
    "explanation": "When JavaScript evaluates '{} - 1', it performs type coercion resulting in NaN."
  },
  {
    "id": 127,
    "code": "console.log({} == 1);",
    "options": [
      "undefined",
      "false",
      "Error",
      "true"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '{} == 1', it performs type coercion resulting in false."
  },
  {
    "id": 128,
    "code": "console.log({} === 1);",
    "options": [
      "Error",
      "true",
      "false",
      "undefined"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '{} === 1', it performs type coercion resulting in false."
  },
  {
    "id": 129,
    "code": "console.log({} < 1);",
    "options": [
      "true",
      "Error",
      "undefined",
      "false"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '{} < 1', it performs type coercion resulting in false."
  },
  {
    "id": 130,
    "code": "console.log({} > 1);",
    "options": [
      "Error",
      "undefined",
      "true",
      "false"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '{} > 1', it performs type coercion resulting in false."
  },
  {
    "id": 131,
    "code": "console.log({} + true);",
    "options": [
      "'[object Object]true'",
      "Error",
      "undefined",
      "NaN"
    ],
    "correctAnswer": "'[object Object]true'",
    "explanation": "When JavaScript evaluates '{} + true', it performs type coercion resulting in '[object Object]true'."
  },
  {
    "id": 132,
    "code": "console.log({} - true);",
    "options": [
      "NaN",
      "'[object Object]'",
      "Error",
      "undefined"
    ],
    "correctAnswer": "NaN",
    "explanation": "When JavaScript evaluates '{} - true', it performs type coercion resulting in NaN."
  },
  {
    "id": 133,
    "code": "console.log({} == true);",
    "options": [
      "true",
      "Error",
      "undefined",
      "false"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '{} == true', it performs type coercion resulting in false."
  },
  {
    "id": 134,
    "code": "console.log({} === true);",
    "options": [
      "false",
      "undefined",
      "Error",
      "true"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '{} === true', it performs type coercion resulting in false."
  },
  {
    "id": 135,
    "code": "console.log({} < true);",
    "options": [
      "undefined",
      "Error",
      "false",
      "true"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '{} < true', it performs type coercion resulting in false."
  },
  {
    "id": 136,
    "code": "console.log({} > true);",
    "options": [
      "false",
      "undefined",
      "Error",
      "true"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '{} > true', it performs type coercion resulting in false."
  },
  {
    "id": 137,
    "code": "console.log({} + false);",
    "options": [
      "Error",
      "'[object Object]false'",
      "undefined",
      "NaN"
    ],
    "correctAnswer": "'[object Object]false'",
    "explanation": "When JavaScript evaluates '{} + false', it performs type coercion resulting in '[object Object]false'."
  },
  {
    "id": 138,
    "code": "console.log({} - false);",
    "options": [
      "undefined",
      "Error",
      "'[object Object]'",
      "NaN"
    ],
    "correctAnswer": "NaN",
    "explanation": "When JavaScript evaluates '{} - false', it performs type coercion resulting in NaN."
  },
  {
    "id": 139,
    "code": "console.log({} == false);",
    "options": [
      "false",
      "true",
      "undefined",
      "Error"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '{} == false', it performs type coercion resulting in false."
  },
  {
    "id": 140,
    "code": "console.log({} === false);",
    "options": [
      "false",
      "undefined",
      "Error",
      "true"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '{} === false', it performs type coercion resulting in false."
  },
  {
    "id": 141,
    "code": "console.log({} < false);",
    "options": [
      "false",
      "true",
      "Error",
      "undefined"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '{} < false', it performs type coercion resulting in false."
  },
  {
    "id": 142,
    "code": "console.log({} > false);",
    "options": [
      "true",
      "Error",
      "false",
      "undefined"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '{} > false', it performs type coercion resulting in false."
  },
  {
    "id": 143,
    "code": "console.log({} + null);",
    "options": [
      "NaN",
      "'[object Object]null'",
      "undefined",
      "Error"
    ],
    "correctAnswer": "'[object Object]null'",
    "explanation": "When JavaScript evaluates '{} + null', it performs type coercion resulting in '[object Object]null'."
  },
  {
    "id": 144,
    "code": "console.log({} - null);",
    "options": [
      "undefined",
      "Error",
      "NaN",
      "'[object Object]'"
    ],
    "correctAnswer": "NaN",
    "explanation": "When JavaScript evaluates '{} - null', it performs type coercion resulting in NaN."
  },
  {
    "id": 145,
    "code": "console.log({} == null);",
    "options": [
      "true",
      "Error",
      "undefined",
      "false"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '{} == null', it performs type coercion resulting in false."
  },
  {
    "id": 146,
    "code": "console.log({} === null);",
    "options": [
      "true",
      "Error",
      "undefined",
      "false"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '{} === null', it performs type coercion resulting in false."
  },
  {
    "id": 147,
    "code": "console.log({} < null);",
    "options": [
      "true",
      "Error",
      "false",
      "undefined"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '{} < null', it performs type coercion resulting in false."
  },
  {
    "id": 148,
    "code": "console.log({} > null);",
    "options": [
      "undefined",
      "true",
      "Error",
      "false"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '{} > null', it performs type coercion resulting in false."
  },
  {
    "id": 149,
    "code": "console.log({} + undefined);",
    "options": [
      "'[object Object]undefined'",
      "Error",
      "undefined",
      "NaN"
    ],
    "correctAnswer": "'[object Object]undefined'",
    "explanation": "When JavaScript evaluates '{} + undefined', it performs type coercion resulting in '[object Object]undefined'."
  },
  {
    "id": 150,
    "code": "console.log({} - undefined);",
    "options": [
      "'[object Object]'",
      "Error",
      "undefined",
      "NaN"
    ],
    "correctAnswer": "NaN",
    "explanation": "When JavaScript evaluates '{} - undefined', it performs type coercion resulting in NaN."
  },
  {
    "id": 151,
    "code": "console.log({} == undefined);",
    "options": [
      "undefined",
      "false",
      "Error",
      "true"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '{} == undefined', it performs type coercion resulting in false."
  },
  {
    "id": 152,
    "code": "console.log({} === undefined);",
    "options": [
      "false",
      "undefined",
      "Error",
      "true"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '{} === undefined', it performs type coercion resulting in false."
  },
  {
    "id": 153,
    "code": "console.log({} < undefined);",
    "options": [
      "true",
      "Error",
      "undefined",
      "false"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '{} < undefined', it performs type coercion resulting in false."
  },
  {
    "id": 154,
    "code": "console.log({} > undefined);",
    "options": [
      "undefined",
      "false",
      "Error",
      "true"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '{} > undefined', it performs type coercion resulting in false."
  },
  {
    "id": 155,
    "code": "console.log({} + NaN);",
    "options": [
      "Error",
      "'[object Object]NaN'",
      "undefined",
      "NaN"
    ],
    "correctAnswer": "'[object Object]NaN'",
    "explanation": "When JavaScript evaluates '{} + NaN', it performs type coercion resulting in '[object Object]NaN'."
  },
  {
    "id": 156,
    "code": "console.log({} - NaN);",
    "options": [
      "undefined",
      "NaN",
      "'[object Object]'",
      "Error"
    ],
    "correctAnswer": "NaN",
    "explanation": "When JavaScript evaluates '{} - NaN', it performs type coercion resulting in NaN."
  },
  {
    "id": 157,
    "code": "console.log({} == NaN);",
    "options": [
      "undefined",
      "Error",
      "true",
      "false"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '{} == NaN', it performs type coercion resulting in false."
  },
  {
    "id": 158,
    "code": "console.log({} === NaN);",
    "options": [
      "true",
      "Error",
      "undefined",
      "false"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '{} === NaN', it performs type coercion resulting in false."
  },
  {
    "id": 159,
    "code": "console.log({} < NaN);",
    "options": [
      "Error",
      "true",
      "undefined",
      "false"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '{} < NaN', it performs type coercion resulting in false."
  },
  {
    "id": 160,
    "code": "console.log({} > NaN);",
    "options": [
      "true",
      "undefined",
      "Error",
      "false"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '{} > NaN', it performs type coercion resulting in false."
  },
  {
    "id": 161,
    "code": "console.log({} + [1]);",
    "options": [
      "NaN",
      "undefined",
      "'[object Object]1'",
      "Error"
    ],
    "correctAnswer": "'[object Object]1'",
    "explanation": "When JavaScript evaluates '{} + [1]', it performs type coercion resulting in '[object Object]1'."
  },
  {
    "id": 162,
    "code": "console.log({} - [1]);",
    "options": [
      "NaN",
      "undefined",
      "Error",
      "'[object Object]'"
    ],
    "correctAnswer": "NaN",
    "explanation": "When JavaScript evaluates '{} - [1]', it performs type coercion resulting in NaN."
  },
  {
    "id": 163,
    "code": "console.log({} == [1]);",
    "options": [
      "false",
      "undefined",
      "Error",
      "true"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '{} == [1]', it performs type coercion resulting in false."
  },
  {
    "id": 164,
    "code": "console.log({} === [1]);",
    "options": [
      "undefined",
      "false",
      "true",
      "Error"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '{} === [1]', it performs type coercion resulting in false."
  },
  {
    "id": 165,
    "code": "console.log({} < [1]);",
    "options": [
      "true",
      "false",
      "Error",
      "undefined"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '{} < [1]', it performs type coercion resulting in false."
  },
  {
    "id": 166,
    "code": "console.log({} > [1]);",
    "options": [
      "true",
      "undefined",
      "Error",
      "false"
    ],
    "correctAnswer": "true",
    "explanation": "When JavaScript evaluates '{} > [1]', it performs type coercion resulting in true."
  },
  {
    "id": 167,
    "code": "console.log({} + ['1']);",
    "options": [
      "'[object Object]1'",
      "Error",
      "undefined",
      "NaN"
    ],
    "correctAnswer": "'[object Object]1'",
    "explanation": "When JavaScript evaluates '{} + ['1']', it performs type coercion resulting in '[object Object]1'."
  },
  {
    "id": 168,
    "code": "console.log({} - ['1']);",
    "options": [
      "Error",
      "'[object Object]'",
      "undefined",
      "NaN"
    ],
    "correctAnswer": "NaN",
    "explanation": "When JavaScript evaluates '{} - ['1']', it performs type coercion resulting in NaN."
  },
  {
    "id": 169,
    "code": "console.log({} == ['1']);",
    "options": [
      "true",
      "Error",
      "undefined",
      "false"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '{} == ['1']', it performs type coercion resulting in false."
  },
  {
    "id": 170,
    "code": "console.log({} === ['1']);",
    "options": [
      "false",
      "undefined",
      "Error",
      "true"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '{} === ['1']', it performs type coercion resulting in false."
  },
  {
    "id": 171,
    "code": "console.log({} < ['1']);",
    "options": [
      "Error",
      "true",
      "false",
      "undefined"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '{} < ['1']', it performs type coercion resulting in false."
  },
  {
    "id": 172,
    "code": "console.log({} > ['1']);",
    "options": [
      "undefined",
      "Error",
      "true",
      "false"
    ],
    "correctAnswer": "true",
    "explanation": "When JavaScript evaluates '{} > ['1']', it performs type coercion resulting in true."
  },
  {
    "id": 173,
    "code": "console.log({} + Infinity);",
    "options": [
      "NaN",
      "undefined",
      "Error",
      "'[object Object]Infinity'"
    ],
    "correctAnswer": "'[object Object]Infinity'",
    "explanation": "When JavaScript evaluates '{} + Infinity', it performs type coercion resulting in '[object Object]Infinity'."
  },
  {
    "id": 174,
    "code": "console.log({} - Infinity);",
    "options": [
      "undefined",
      "Error",
      "'[object Object]'",
      "NaN"
    ],
    "correctAnswer": "NaN",
    "explanation": "When JavaScript evaluates '{} - Infinity', it performs type coercion resulting in NaN."
  },
  {
    "id": 175,
    "code": "console.log({} == Infinity);",
    "options": [
      "false",
      "true",
      "Error",
      "undefined"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '{} == Infinity', it performs type coercion resulting in false."
  },
  {
    "id": 176,
    "code": "console.log({} === Infinity);",
    "options": [
      "false",
      "undefined",
      "Error",
      "true"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '{} === Infinity', it performs type coercion resulting in false."
  },
  {
    "id": 177,
    "code": "console.log({} < Infinity);",
    "options": [
      "true",
      "undefined",
      "Error",
      "false"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '{} < Infinity', it performs type coercion resulting in false."
  },
  {
    "id": 178,
    "code": "console.log({} > Infinity);",
    "options": [
      "Error",
      "false",
      "true",
      "undefined"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '{} > Infinity', it performs type coercion resulting in false."
  },
  {
    "id": 179,
    "code": "console.log(\"\" + []);",
    "options": [
      "Error",
      "undefined",
      "NaN",
      "''"
    ],
    "correctAnswer": "''",
    "explanation": "When JavaScript evaluates '\"\" + []', it performs type coercion resulting in ''."
  },
  {
    "id": 180,
    "code": "console.log(\"\" - []);",
    "options": [
      "NaN",
      "Error",
      "undefined",
      "0"
    ],
    "correctAnswer": "0",
    "explanation": "When JavaScript evaluates '\"\" - []', it performs type coercion resulting in 0."
  },
  {
    "id": 181,
    "code": "console.log(\"\" == []);",
    "options": [
      "false",
      "Error",
      "undefined",
      "true"
    ],
    "correctAnswer": "true",
    "explanation": "When JavaScript evaluates '\"\" == []', it performs type coercion resulting in true."
  },
  {
    "id": 182,
    "code": "console.log(\"\" === []);",
    "options": [
      "false",
      "undefined",
      "Error",
      "true"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '\"\" === []', it performs type coercion resulting in false."
  },
  {
    "id": 183,
    "code": "console.log(\"\" < []);",
    "options": [
      "Error",
      "true",
      "false",
      "undefined"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '\"\" < []', it performs type coercion resulting in false."
  },
  {
    "id": 184,
    "code": "console.log(\"\" > []);",
    "options": [
      "true",
      "Error",
      "undefined",
      "false"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '\"\" > []', it performs type coercion resulting in false."
  },
  {
    "id": 185,
    "code": "console.log(\"\" + {});",
    "options": [
      "Error",
      "'[object Object]'",
      "undefined",
      "NaN"
    ],
    "correctAnswer": "'[object Object]'",
    "explanation": "When JavaScript evaluates '\"\" + {}', it performs type coercion resulting in '[object Object]'."
  },
  {
    "id": 186,
    "code": "console.log(\"\" - {});",
    "options": [
      "undefined",
      "Error",
      "'[object Object]'",
      "NaN"
    ],
    "correctAnswer": "NaN",
    "explanation": "When JavaScript evaluates '\"\" - {}', it performs type coercion resulting in NaN."
  },
  {
    "id": 187,
    "code": "console.log(\"\" == {});",
    "options": [
      "false",
      "Error",
      "undefined",
      "true"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '\"\" == {}', it performs type coercion resulting in false."
  },
  {
    "id": 188,
    "code": "console.log(\"\" === {});",
    "options": [
      "false",
      "undefined",
      "Error",
      "true"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '\"\" === {}', it performs type coercion resulting in false."
  },
  {
    "id": 189,
    "code": "console.log(\"\" < {});",
    "options": [
      "undefined",
      "Error",
      "false",
      "true"
    ],
    "correctAnswer": "true",
    "explanation": "When JavaScript evaluates '\"\" < {}', it performs type coercion resulting in true."
  },
  {
    "id": 190,
    "code": "console.log(\"\" > {});",
    "options": [
      "false",
      "true",
      "Error",
      "undefined"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '\"\" > {}', it performs type coercion resulting in false."
  },
  {
    "id": 191,
    "code": "console.log(\"\" + \"\");",
    "options": [
      "NaN",
      "''",
      "undefined",
      "Error"
    ],
    "correctAnswer": "''",
    "explanation": "When JavaScript evaluates '\"\" + \"\"', it performs type coercion resulting in ''."
  },
  {
    "id": 192,
    "code": "console.log(\"\" - \"\");",
    "options": [
      "Error",
      "undefined",
      "0",
      "NaN"
    ],
    "correctAnswer": "0",
    "explanation": "When JavaScript evaluates '\"\" - \"\"', it performs type coercion resulting in 0."
  },
  {
    "id": 193,
    "code": "console.log(\"\" == \"\");",
    "options": [
      "false",
      "Error",
      "undefined",
      "true"
    ],
    "correctAnswer": "true",
    "explanation": "When JavaScript evaluates '\"\" == \"\"', it performs type coercion resulting in true."
  },
  {
    "id": 194,
    "code": "console.log(\"\" === \"\");",
    "options": [
      "true",
      "false",
      "Error",
      "undefined"
    ],
    "correctAnswer": "true",
    "explanation": "When JavaScript evaluates '\"\" === \"\"', it performs type coercion resulting in true."
  },
  {
    "id": 195,
    "code": "console.log(\"\" < \"\");",
    "options": [
      "true",
      "false",
      "Error",
      "undefined"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '\"\" < \"\"', it performs type coercion resulting in false."
  },
  {
    "id": 196,
    "code": "console.log(\"\" > \"\");",
    "options": [
      "Error",
      "true",
      "false",
      "undefined"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '\"\" > \"\"', it performs type coercion resulting in false."
  },
  {
    "id": 197,
    "code": "console.log(\"\" + \"0\");",
    "options": [
      "NaN",
      "undefined",
      "Error",
      "'0'"
    ],
    "correctAnswer": "'0'",
    "explanation": "When JavaScript evaluates '\"\" + \"0\"', it performs type coercion resulting in '0'."
  },
  {
    "id": 198,
    "code": "console.log(\"\" - \"0\");",
    "options": [
      "NaN",
      "undefined",
      "Error",
      "0"
    ],
    "correctAnswer": "0",
    "explanation": "When JavaScript evaluates '\"\" - \"0\"', it performs type coercion resulting in 0."
  },
  {
    "id": 199,
    "code": "console.log(\"\" == \"0\");",
    "options": [
      "false",
      "undefined",
      "Error",
      "true"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '\"\" == \"0\"', it performs type coercion resulting in false."
  },
  {
    "id": 200,
    "code": "console.log(\"\" === \"0\");",
    "options": [
      "undefined",
      "false",
      "Error",
      "true"
    ],
    "correctAnswer": "false",
    "explanation": "When JavaScript evaluates '\"\" === \"0\"', it performs type coercion resulting in false."
  }
];