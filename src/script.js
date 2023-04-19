const sentence = "There was a monkey who knew Javascript";

const pattern = /w[a-z]s/;

// [abc] => contains a, b or c | [^abc] => not a, b, or c

const test = pattern.test(sentence);
console.log(test);

const match = sentence.match(pattern);

console.log(match);
