import { render, fireEvent } from '@testing-library/react';
import Calculator from './calculator';

test('Deve limpar o Campo', () => {
  const {getByTestId, getByText} = render(<Calculator />);
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('C'));
  expect(getByTestId('txtNumbers')).toHaveValue('0')
});

test('Deve somar 2 + 3 e obter 5', () => {
  const {getByTestId, getByText} = render(<Calculator />);
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('='));
  expect(getByTestId('txtNumbers')).toHaveValue('5');
});

test('Deve subtrair 5 - 3 e obter 2', () => {
  const {getByTestId, getByText} = render(<Calculator />);
  fireEvent.click(getByText('5'));
  fireEvent.click(getByText('-'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('='));
  expect(getByTestId('txtNumbers')).toHaveValue('2');
});

test('Deve dividir 6 / 3 e obter 2', () => {
  const {getByTestId, getByText} = render(<Calculator />);
  fireEvent.click(getByText('6'));
  fireEvent.click(getByText('/'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('='));
  expect(getByTestId('txtNumbers')).toHaveValue('3');
});

test('Deve multiplicar 2 * 3 e obter 6', () => {
  const {getByTestId, getByText} = render(<Calculator />);
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('*'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('='));
  expect(getByTestId('txtNumbers')).toHaveValue('6');
});

test('Deve somar 2.5 + 3 e obter 5.5', () => {
  const {getByTestId, getByText} = render(<Calculator />);
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('.'));
  fireEvent.click(getByText('5'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('='));
  expect(getByTestId('txtNumbers')).toHaveValue('5.5');
});