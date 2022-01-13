import { MemoryRouter, Route } from 'react-router-dom';
import EditDog from '../EditDog/EditDog';
import { render, screen } from '@testing-library/react';

test('should render an individual dog', async () => {
  // render the component
  const { container } = render(
    <MemoryRouter initialEntries={['/dogs/206/edit']}>
      <Route path="/dogs/:id/edit" component={EditDog} />
    </MemoryRouter>
  );
  await screen.findByDisplayValue('Charles');
  expect(container).toMatchSnapshot();
});
