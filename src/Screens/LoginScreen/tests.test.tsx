import {fireEvent, render, screen} from '../../test-utils';
import {LoginScreen} from './LoginScreen';

describe('LoginScreen', () => {
  const navigationMock: any = {
    navigation: {
      navigate: jest.fn(),
      push: jest.fn(),
    },
  };
  const routeMock: any = {};

  beforeEach(() => {
    render(<LoginScreen navigation={navigationMock} route={routeMock} />);
  });
  it('login button exists', () => {
    const loginButton = screen.queryByText('Login'); // queryBy returns null if does not find immediately. There is also searchBy which throws error if element is not found https://testing-library.com/docs/queries/about/
    expect(loginButton).toBeTruthy();
  });
  it('pressing login button takes to home screen', async () => {
    const loginButton = await screen.findByText('Login'); // findBy looks for 1s before it timesout and throws error
    fireEvent(loginButton, 'press');
    expect(navigationMock.navigation.push).toHaveBeenCalled();
  });
});
