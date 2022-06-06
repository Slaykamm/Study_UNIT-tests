import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Users from './Users';
import UserDetailPage from './userDetail/UserDetailPage';
import axios from 'axios'
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import AppRouter from '../router/AppRouter';
import { renderWithRouter } from '../tests/helpers/renderWithRouter';


jest.mock('axios')


describe('Study unittests', ()=>{
    let response;
    beforeEach(()=>{
        response = {
            data: [
                {
                "id": 1,
                "name": "Leanne Graham",
                },
                {
                "id": 2,
                "name": "Ervin Howell",
                },
                {
                "id": 3,
                "name": "Clementine Bauch",
                },
            ]
        }
    })
    afterEach(()=> {
        jest.clearAllMocks()
    })


  test('check USER elements', async () => {
    axios.get.mockReturnValue(response)
    render(
    <MemoryRouter initialEntries={['/users']}>
        <Routes>
            <Route path='/users' element={<Users/>} />
            <Route path='/users/:id' element={<UserDetailPage/>} />
        </Routes>
    </MemoryRouter>
    );
    const users = await screen.findAllByTestId('user-item')
    expect(users.length).toBe(3)
    expect(axios.get).toBeCalledTimes(1)
  })

  test('check USER redirect to detailPage', async () => {
    axios.get.mockReturnValue(response)
    renderWithRouter(null, '/users');
    const users = await screen.findAllByTestId('user-item')
    expect(users.length).toBe(3)
    userEvent.click(users[0])
    expect(screen.getByTestId('user-page')).toBeInTheDocument();
  })
})