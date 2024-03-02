import { render, screen, fireEvent } from '@testing-library/react';
import BattleOfTheSexes from './BattleOfTheSexes';

test('renders BattleOfTheSexes component', () => {
  render(<BattleOfTheSexes />);
  const titleElement = screen.getByText(/Battle of the Sexes/i);
  expect(titleElement).toBeInTheDocument();
});

test('updates highlight when strategies are selected', () => {
  render(<BattleOfTheSexes />);
  const select1 = screen.getByLabelText(/Player 1 Strategy/i);
  const select2 = screen.getByLabelText(/Player 2 Strategy/i);
  const button = screen.getByText(/Reveal Results/i);

  fireEvent.change(select1, { target: { value: 'Opera' } });
  fireEvent.change(select2, { target: { value: 'Opera' } });
  fireEvent.click(button);

  const highlightedCell = screen.getByText('(2,1)');
  expect(highlightedCell).toHaveStyle('background-color: yellow');
});