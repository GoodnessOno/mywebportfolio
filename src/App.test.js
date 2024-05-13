import { render, screen, act } from '@testing-library/react';
import { Welcomepage } from './pages'

test('renders "Hi, My name is Goodness." in the welcomepage', async () => {
  await act(async () => {
    render(<Welcomepage />);
  });
  const welcomepageElement = screen.getByText('Hi, My name is Goodness');
  expect(welcomepageElement).toBeInTheDocument();
});
