import {render, screen} from '../../test-utils';
import {LoginScreen} from './LoginScreen';

describe('LoginScreen', () => {
  const navigationMock: any = {
    navigation: {
      navigate: jest.fn(),
    },
  };
  const routeMock: any = {};

  beforeEach(() => {
    render(<LoginScreen navigation={navigationMock} route={routeMock} />);
  });
  test('test', () => {
    const loginButton = screen.queryByText('Login');
    expect(loginButton).toBeTruthy();
  });
});
