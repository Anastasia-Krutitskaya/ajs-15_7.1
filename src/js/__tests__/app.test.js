import Validator from '../app';

test('all right', () => {
  const result = new Validator('aAb356-_f').validateUserName();
  expect(result).toBe(true);
});

test('- at the begining', () => {
  const result = new Validator('-Ab356-_f').validateUserName();
  expect(result).toBe(false);
});

test('- at the end', () => {
  const result = new Validator('aAb356-_-').validateUserName();
  expect(result).toBe(false);
});

test('_ at the begining', () => {
  const result = new Validator('_Ab356-_f').validateUserName();
  expect(result).toBe(false);
});

test('_ at the end', () => {
  const result = new Validator('aAb356-__').validateUserName();
  expect(result).toBe(false);
});

test('0 at the begining', () => {
  const result = new Validator('0Ab356-_f').validateUserName();
  expect(result).toBe(false);
});

test('0 at the end', () => {
  const result = new Validator('aAb356-_0').validateUserName();
  expect(result).toBe(false);
});

test('more than 3 numbers', () => {
  const result = new Validator('aAb35667-_a').validateUserName();
  expect(result).toBe(false);
});
