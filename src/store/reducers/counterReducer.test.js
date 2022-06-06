import counterReducer, { decrement, increment } from "./counterReducer"

describe('Reducer Tests', () => {
    test('increment', () => {
        expect(counterReducer({value: 0}, increment())).toEqual({value: 1})
    })

    test('decrement', () => {
        expect(counterReducer({value: 10}, decrement())).toEqual({value: 9})
        
    })

    test('empty state', () => {
        expect(counterReducer(undefined, decrement())).toEqual({value: -1}) 
        expect(counterReducer(undefined, increment())).toEqual({value: 1}) 
    })
})