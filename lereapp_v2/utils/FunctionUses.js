// Capitalize first Letter
function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1);
}
const splitAt = (index) => (x) => [x.slice(0, index), x.slice(index)];

export { capitalize, splitAt };
