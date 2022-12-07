import {fireEvent, render, screen} from '../../test-utils';
import {LoginScreen} from './LoginScreen';

describe('LoginScreen', () => {
  const navigationMock: any = {
    navigate: jest.fn(),
    push: jest.fn(),
  };

  const routeMock: any = {};
  let store: any;
  beforeEach(() => {
    const component = render(
      <LoginScreen navigation={navigationMock} route={routeMock} />,
    );
    store = component.store;
  });
  it('login button exists', () => {
    const loginButton = screen.queryByText('Login'); // queryBy returns null if does not find immediately. There is also searchBy which throws error if element is not found, findBy looks for 1s before it timesout and throws error. source: https://testing-library.com/docs/queries/about/
    expect(loginButton).toBeTruthy();
  });
  it('pressing login button updates state', async () => {
    // Redux does not recommend mocking the store, but rather using the real implementation and doing integration tests
    const loginButton = await screen.findByText('Login');
    fireEvent(loginButton, 'press');
    console.log(store.getState()); // <- THIS runs before the state is actually updated and returns the old store...
  });
  it('pressing register button calls navigate', async () => {
    const registerButton = await screen.findByText('Register');
    fireEvent(registerButton, 'press');
    expect(navigationMock.navigate).toHaveBeenCalled();
  });
});
