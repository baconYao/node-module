const companies = [
  'Google',
  'Apple',
  'Uber',
  'Facebook'
];

const [a, b, c] = companies;
console.log(a);
console.log(c);
console.log();

const [first, second, ...rest ] = companies;
console.log(rest);
console.log();


const { length } = companies;
console.log(length);
console.log();

const Yao = {
  loc: ["bacon", "judy", "love"]
};
const { loc: [ location ] } = Yao;
console.log(location);