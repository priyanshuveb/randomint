#!/usr/bin/env node
function getRandom(n1, n2) {
  if (!n1 && !n2) {
    n1 = 1000000000;
    n2 = 9999999999;
  }
  if (!n2 && n1) {
    let val = n1;
    n1 = Math.pow(10, val - 1);
    n2 = Math.pow(10, val) - 1;
  }
  const fractionVar = n2 / n1;

  let multiplier = randomParameter1() + 1 + randomParameter2(n1, n2);
  while (multiplier > fractionVar) {
    multiplier = randomParameter1() + 1 + randomParameter2(n1, n2);
  }
  return Math.floor(multiplier * n1);
};

const randomParameter2 = (n1, n2) => {
  const date = Date.now();
  const frac = Math.floor(n2 / n1);

  for (i = 1; i < 10; i++) {
    let checkParam = Math.pow(10, i);
    
    if (frac % checkParam === frac) {
      if (frac * 10 === checkParam) checkParam = frac;
      
      return date % checkParam;
    }
  }
};
const randomParameter1 = () => {
  const date = Date.now();
  return (date % 1000) / 1000;
};

module.exports = getRandom;