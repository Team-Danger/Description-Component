let key = 0;
function makeKey(seed) {
  key += 1;
  return seed + key;
}

export default makeKey;
