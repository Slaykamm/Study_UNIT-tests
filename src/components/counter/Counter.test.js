import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import { Provider } from "react-redux"
import Counter from "./Counter"
import { createReduxStore } from '../../store/store' 
import { renderWithRedux } from "../../tests/helpers/renderWithRedux"
import { renderTestApp } from "../../tests/helpers/renderTestApp"

describe('Counter test', () => {
    test('test Rounter', async () => {
        const {getByTestId} = renderTestApp(null, {
            route: '/',
            initialState: {
                counter: { value: 10 }
            }
        })
        const incrementButton = getByTestId('incrementButton')
        expect(getByTestId('value-title')).toHaveTextContent('0')
        userEvent.click(incrementButton)
        expect(getByTestId('value-title')).toHaveTextContent('1')
    })
})