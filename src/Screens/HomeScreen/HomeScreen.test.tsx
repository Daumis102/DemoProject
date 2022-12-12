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

  function fillNameInputAndPress(text: string) {
    const inputField = screen.getByPlaceholderText('Enter name');
    fireEvent.changeText(inputField, text);

    const addButton = screen.getByText('Add');
    fireEvent.press(addButton);

    return {inputField, addButton};
  }
});
