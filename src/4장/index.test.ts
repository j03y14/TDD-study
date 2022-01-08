// TODO
// 1. Dollar를 값 객체로 비교할 수 있도록.

import Dollar from './index';

test('달러의 동등비교', () => {
  // 틀린 것까지 테스트를 만들어본 다음에 일반화 해서 코드를 작성 한다.
  expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
  expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
});

test('달러의 곱셈', () => {
  const dollar = new Dollar(5);
  expect(dollar.times(2)).toStrictEqual(new Dollar(10));
  expect(dollar.times(3)).toStrictEqual(new Dollar(15));
});
