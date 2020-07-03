# Silhouette Coefficient
This is JavaScript implementation of Silhouette Coefficient used for the evaluation of clustering quality.
The SC takes values from the interval [-1; 1]. The higher the SC the better clustering quality.

## Installation
`npm i @robzzson/silhouette`

## Example
```JavaScript
const silhouette = require('@robzzson/silhouette');

const data = [
  [-9.67867, -4.20271],
  [0.08525, 3.64528],
  [-7.38729, -8.53728],
  [-5.93111, -9.25311],
  [-8.5356, -6.01348],
  [-2.18773, 3.33352],
  [-0.79415, 2.10495],
];
const labels = [1, 0, 2, 2, 1, 0, 0];

let score = silhouette(data, labels);
console.log(score);
```

## License
[MIT](https://github.com/Robzzson/silhouette-coefficient/blob/master/LICENSE)
