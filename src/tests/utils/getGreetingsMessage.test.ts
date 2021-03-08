import { getGreetingsMessage } from '../../utils/getGreetingsMessage';

test('should return a greetings message', () => {
  expect(getGreetingsMessage()).toBe('Hello my friend');
});
