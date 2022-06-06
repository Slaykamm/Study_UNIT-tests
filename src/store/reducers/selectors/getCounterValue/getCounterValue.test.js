import { getCounterValue } from "./getCounterValue"

describe('GetCounterValue', () => {
    test('with empty obj', () => {
        expect(getCounterValue({})).toBe(0)
    })

    test('with filled obj', () => {
        expect(getCounterValue({
            counter: {
                value: 100
            }
        })).toBe(100)
    })

})