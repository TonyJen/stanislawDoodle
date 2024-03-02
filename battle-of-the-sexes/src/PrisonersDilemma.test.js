import { render, screen, fireEvent } from '@testing-library/react';
import PrisonersDilemma from './PrisonersDilemma';

test('renders PrisonersDilemma component', () => {
  render(<PrisonersDilemma />);
  const titleElement = screen.getByText(/Prisoner's Dilemma/i);
  expect(titleElement).toBeInTheDocument();
});

test('updates highlight when strategies are selected', () => {
  render(<PrisonersDilemma />);
  const select1 = screen.getByLabelText(/Player 1 Strategy/i);
  const select2 = screen.getByLabelText(/Player 2 Strategy/i);
  const button = screen.getByText(/Reveal Results/i);

  fireEvent.change(select1, { target: { value: 'Cooperate' } });
  fireEvent.change(select2, { target: { value: 'Cooperate' } });
  fireEvent.click(button);

  const highlightedCell = screen.getByText('(2,2)');
  expect(highlightedCell).toHaveStyle('background-color: yellow');
});