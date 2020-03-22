import $t from 'prop-types';


const value = val => $t.oneOf([val]);


export const Text = $t.shape({
  type: value('text').isRequired,
  body: $t.any
});


export const Element = $t.shape({
  type: value('element').isRequired,
  tag: $t.string.isRequired,
  styles: $t.object,
  children: $t.array  // Node
});


export const Node = $t.oneOfType([
  Text,
  Element
]);

