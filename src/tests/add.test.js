const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test('should return "Hello" Name', () => {
  const result = generateGreeting('Jona');
  expect(result).toBe("Hello Jona!");
});

test('should generate greeting for no namne', () => {
  const result = generateGreeting();
  expect(result).toBe('Hello Anonymous!');
});