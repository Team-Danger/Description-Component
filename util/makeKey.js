// used to make unique keys for lists of react components
// the seed should be unique for each list
// but it doesn't have to be descriptive, it's only used by react
let key = 0;
function makeKey(seed) {
  key += 1;
  return seed + key;
}

export default makeKey;
