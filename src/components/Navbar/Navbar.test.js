import { renderWithRouter } from '../../tests/helpers/renderWithRouter'
import Navbar from './Navbar'
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('NavBarTests', () =>{

    test('test about Link',  async() => {
        renderWithRouter(<Navbar />)
        const aboutLink = screen.getByTestId('about-link')
        userEvent.click(aboutLink)
        expect(screen.getByTestId('about-page')).toBeInTheDocument()
    })


    test('test main Link',  async() => {
        renderWithRouter(<Navbar />)
        const mainLink = screen.getByTestId('main-link')
        userEvent.click(mainLink)
        expect(screen.getByTestId('main-page')).toBeInTheDocument()
    })

    test('test users Link',  async() => {
        renderWithRouter(<Navbar />)
        const usersLink = screen.getByTestId('users-link')
        userEvent.click(usersLink)
        expect(screen.getByTestId('users-page')).toBeInTheDocument()
    })

})