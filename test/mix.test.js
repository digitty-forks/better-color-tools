import { expect } from 'chai';
import better from '../dist/index.js';

const R = '#ff0000';
const Y = '#ffff00';
const G = '#00ff00';
const C = '#00ffff';
const B = '#0000ff';
const M = '#ff00ff';
const K = '#000000';
const W = '#ffffff';

describe('better.mix', () => {
  const tests = [
    ['r -> y', R, Y, '#ffa000'],
    ['r -> g', R, G, '#d0a800'],
    ['r -> c', R, C, '#d2a993'],
    ['y -> g', Y, G, '#b0ff00'],
    ['g -> c', G, C, '#00ffa9'],
    ['g -> b', G, B, '#00aabf'],
    ['g -> m', G, M, '#c6b4b4'],
    ['c -> b', C, B, '#00a0ff'],
    ['b -> m', B, M, '#9038ff'],
    ['b -> r', B, R, '#8c53a2'],
    ['b -> y', B, Y, '#6cabc7'],
    ['m -> r', M, R, '#fd2d9b'],
    ['k -> w', K, W, '#636363'],
  ];

  for (const [name, c1, c2, mid] of tests) {
    it(name, () => {
      expect(better.mix(c1, c2, 0).hex).to.equal(c1);
      expect(better.mix(c1, c2, 0.5).hex).to.equal(mid);
      expect(better.mix(c1, c2, 1).hex).to.equal(c2);
    });
  }

  // grayscale
  const grayscale = ['#000000', '#030303', '#161616', '#2e2e2e', '#484848', '#636363', '#808080', '#9e9e9e', '#bebebe', '#dedede', '#ffffff'];
  for (let n = 0; n < grayscale.length; n++) {
    it (`k -> w (${n * 10}%)`, () => {
      expect(better.mix('black', 'white', n/10).hex).to.equal(grayscale[n]);
    });
  }
});