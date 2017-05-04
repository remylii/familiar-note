import test from 'ava';
import { pageTitle, hello } from '../src/scripts/lib/pageAction';

test('function siteTitle return `TOP｜familiar-note`', t => {
  const title = 'TOP｜familiar-note';
  t.is(pageTitle('TOP'), title);
});

test('function hello return `Hello`', t => {
  const expected_value = 'Hello';
  t.is(hello(), expected_value);
});
