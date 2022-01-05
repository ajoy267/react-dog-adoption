import { MemoryRouter, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Dog from '../views/Dog/Dog';
import { render, screen } from '@testing-library/react';

test('should render an individual dog', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/dogs/10']}>
      <Route path="/dogs/:id">
        <Dog />
      </Route>
    </MemoryRouter>
  );
  await screen.findByText('Barton');
  expect(container).toMatchSnapshot();
});
