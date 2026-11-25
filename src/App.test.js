import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  window.history.pushState({}, '', '/');
  window.scrollTo = jest.fn();
});

test('opens developer profile in the same page without target="_blank"', () => {
  render(<App />);
  const profileLinks = screen.getAllByText(/ver perfil/i);
  expect(profileLinks).toHaveLength(4);

  const jhonnyLink = screen.getByRole('link', {
    name: /ver apartado de jhonny stiven yunda guzman/i
  });
  expect(jhonnyLink).toHaveAttribute('href', '?dev=jhonny');
  expect(jhonnyLink).not.toHaveAttribute('target', '_blank');

  fireEvent.click(jhonnyLink);

  expect(
    screen.getByRole('heading', { name: /Sobre Jhonny Stiven Yunda Guzman/i })
  ).toBeInTheDocument();
  expect(screen.getByText('// Tecnologías principales')).toBeInTheDocument();

  const backLink = screen.getByRole('link', { name: /volver al equipo/i });
  fireEvent.click(backLink);
  expect(screen.getByText('Quiénes somos')).toBeInTheDocument();
});

test('renders dedicated developer profile when ?dev query param is present and switches between members in-page', () => {
  window.history.pushState({}, '', '/?dev=darwin');
  render(<App />);

  expect(
    screen.getByRole('heading', { name: 'Darwin Alexis Benitez Cortes' })
  ).toBeInTheDocument();

  const cristianTab = screen.getByRole('link', {
    name: /CT Cristian Camilo Trujillo Llanos/i
  });
  fireEvent.click(cristianTab);

  expect(
    screen.getByRole('heading', { name: /Sobre Cristian Camilo Trujillo Llanos/i })
  ).toBeInTheDocument();
  expect(screen.getByText('// Tecnologías principales')).toBeInTheDocument();
});
