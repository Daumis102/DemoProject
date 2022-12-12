import {fireEvent, render, screen} from '../../test-utils';
import {HomeScreen} from './HomeScreen';

describe('HomeScreen', () => {
  beforeEach(() => {
    render(<HomeScreen />);
  });
  it('should clear the input field after pressing add', async () => {
    const {inputField} = fillNameInputAndPress('foo');
    expect(inputField.props.value).toBe('');
  });
  it('should add a new items with a text entered in the input field after pressing add', async () => {
    fillNameInputAndPress('foo');
    fillNameInputAndPress('bar');

    expect(screen.getByText('foo')).toBeTruthy();
    expect(screen.getByText('bar')).toBeTruthy();
  });

  it('should match a snapshot after adding a new item to the list', () => {
    fillNameInputAndPress('foo');
    expect(screen.toJSON()).toMatchSnapshot();
  });

  function fillNameInputAndPress(text: string) {
    const inputField = screen.getByPlaceholderText('Enter name');
    fireEvent.changeText(inputField, text);

    const addButton = screen.getByText('Add');
    fireEvent.press(addButton);

    return {inputField, addButton};
  }
});
