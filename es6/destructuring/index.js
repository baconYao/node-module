var file = {
  type: 'jpg',
  name: 'bacon',
  size: 123456
};

function fileSummary({ name, type, size }, { color }) {
  return `${color}~ The file ${name}.${type} is size of ${size}`;
};

var f = fileSummary(file, { color: 'red' });
console.log(f);