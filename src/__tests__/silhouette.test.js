import silhouette from '../silhouette';
import { toBeDeepCloseTo } from 'jest-matcher-deep-close-to';
expect.extend({ toBeDeepCloseTo });

const X = [
  [-9.67867, -4.20271],
  [0.08525, 3.64528],
  [-7.38729, -8.53728],
  [-5.93111, -9.25311],
  [-8.5356, -6.01348],
  [-2.18773, 3.33352],
  [-0.79415, 2.10495],
];
const labels = [1, 0, 2, 2, 1, 0, 0];
const distArr = [
  [0, 12.52698, 4.90294, 6.28893, 2.14137, 10.62587, 10.89593],
  [12.52698, 0, 14.29174, 14.23254, 12.94646, 2.29426, 1.77368],
  [4.90294, 14.29174, 0, 1.62262, 2.77274, 12.9596, 12.519],
  [6.28893, 14.23254, 1.62262, 0, 4.15675, 13.1315, 12.46571],
  [2.14137, 12.94646, 2.77274, 4.15675, 0, 11.29876, 11.2178],
  [10.62587, 2.29426, 12.9596, 13.1315, 11.29876, 0, 1.8578],
  [10.89593, 1.77368, 12.519, 12.46571, 11.2178, 1.8578, 0],
];
const intraDistArr = [
  2.14137,
  4.06795,
  1.62262,
  1.62262,
  2.14137,
  4.15207,
  3.63149,
];
const interDistArr = [
  5.59594,
  12.73672,
  3.83784,
  5.22284,
  3.46475,
  10.96231,
  11.05687,
];
const samples = [0.61733, 0.8403, 0.5772, 0.68932, 0.38195, 0.81062, 0.83578];

describe('test silhouette', () => {
  test('score function', () => {
    expect(silhouette(X, labels)).toBeCloseTo(0.67893, 5);
  });

  test('samples function', () => {
    expect(
      silhouette.__get__('silhouetteSamples')(
        X,
        labels,
        jest.fn(() => ({ intraDist: intraDistArr, interDist: interDistArr }))
      )
    ).toBeDeepCloseTo(samples, 3);
  });

  test('reduce function', () => {
    let result = silhouette.__get__('silhouetteReduce')(distArr, labels, [
      3,
      2,
      2,
    ]);
    expect(result.intraDist).toBeDeepCloseTo(intraDistArr, 3);
    expect(result.interDist).toBeDeepCloseTo(interDistArr, 3);
  });

  test('countBy function', () => {
    expect(silhouette.__get__('countBy')([3, 1, 1, 2, 0, 3, 1, 5, 0])).toEqual([
      2,
      3,
      1,
      2,
      0,
      1,
    ]);
  });

  test.each([[[1, 2, Infinity, 3]], [[1, 2, NaN, 3]], [[1, 2, 2.5, 3]]])(
    'countBy function throws error when there is invalid value in input array: %s',
    (arr) => {
      expect(() => silhouette.__get__('countBy')(arr)).toThrow(
        'Array must contain only natural numbers'
      );
    }
  );
});
