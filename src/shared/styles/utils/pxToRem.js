const pxToRem = (px, precision = 3) => {
  if (typeof px !== 'number') {
    throw new TypeError('pxToRem expects numbers');
  }

  const rem = px / 16;
  return `${Number(rem.toFixed(precision))}rem`;
}

const pxToRemValue = (...values) => {
  return values.map((px) => pxToRem(px)).join(' ');
};


export { pxToRemValue };
