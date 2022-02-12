import React from 'react';
import { render } from '@testing-library/react';
import Header from './index';

test('헤더에 타이틀이 알맞게 렌더링 된다.', () => {
  const exampleString = '네모네모 자동차';
  const { container } = render(<Header title={exampleString} />);
  const title = container.firstChild?.textContent;

  expect(title).not.toBe('wrong string');
  expect(title).toBe(exampleString);
});
