const counter = require('./counter');

var array1 = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ];

test('add sheepts to counter when it is true', () => {
  expect(counter(array1)).toBe(17);
});