import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

describe('Study unittests', ()=>{
  test('renders learn react link', () => {
    render(<App />);
    //check elements
    const study = screen.getByText(/Hello Study/i)
    const btn = screen.getByRole('button')
    const input = screen.getByPlaceholderText(/input value/i)
    expect(study).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toMatchSnapshot();
  });

  //check async data
  test('test async info', async () => {
    render(<App />);
    // const study = screen.queryByText(/HHEEELO/i)
    // expect(study).toBeNull()
    const study2 = await screen.findByText(/data/i)
    expect(study2).toBeInTheDocument();
    expect(study2).toHaveStyle({color: 'green'})
  });

  //click test
  test('click event', ()=>{
    render(<App />);
    const btn = screen.getByTestId('toggle-btn')
    expect(screen.queryByTestId('toggle-elem')).toBeNull()
    fireEvent.click(btn)
    expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument()
    fireEvent.click(btn)    
    expect(screen.queryByTestId('toggle-elem')).toBeNull()
  });

})
  // test INPUT
  test('input event', ()=>{
    render(<App />);
    const input = screen.getByPlaceholderText(/input value/i)
    expect(screen.queryByTestId('value-elem')).toContainHTML('')
    // fireEvent.input(input, {
    //   target: {value: '123123'}
    // })
    // имитирует юзера юзерЕвент
    userEvent.type(input, '123123')
    expect(screen.queryByTestId('value-elem')).toContainHTML('123123')
  })
